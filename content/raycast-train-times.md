---
title: Getting Train Times in Raycast
description: Playing around with the raycast extension API to get the next train times for the station next to the new office.
published: 2025-05-03
edited: 2025-05-03
draft: false
---

## New Year, New Office

&above moved into our new office last month. There's a bit of an internal joke around how many times we move office as in the last 6 years of the company we've moved almost twice every year. I'm a big fan of moving as I always feels it gives a new lease of life to the team and the culture as you get to explore a new area.

The new office is right next to Waterloo train station in London and a lot of the team gets in and out from there. Around the same time I also saw a tweet from [Joe Bell](https://x.com/joebell_) about his new Raycast extension to check train times in Estonia.

## Process

I've been a long time user of Raycast and have built a couple of personal extensions. I've also been meaning to build another extension for a while but didn't have a good idea. I had 30 minutes today while drinking coffee so decided it would be a fun way to pass the time.

The idea for the extension is fairly simple. Find an API endpoint that can be called to get train times for a station then display the results in Raycast.

In the UK we have National Rail which is funded by the government and is used to show the train times on all the boards within the stations so I had to setup an account to get access to the information. The site to get access is [https://raildata.org.uk/](https://raildata.org.uk/). They have an account approval process but it was fairly quick to get approved.

I then looked through their 'marketplace' of API's to find one that could give me the train times for a station, I can't lie it's pretty confusing to navigate as there's a bunch of API's which serve very similar purposes.

I settled on the 'Live Departure Board' API as it had the most flexible endpoint to get the train times for a station. They have this process where you need to 'subscribe' to the API and then you get a key to use, but amazingly it's completely free with no limits on the number of requests.

## Implementation

Now that I have an API key implementing the remaining code was fairly straight forward.

Creating a raycast extension is very easy and you can get started within raycast by just typing 'create extension' and following the steps. This sets up the basic structure of the extension.

Raycast also provide some useful utils which seem to be deeply integrated so I thought it was best to use them instead of rolling my own. I initially started with the `useFetch` util but ended up with the `useCachedPromise` instead as I wanted to cache the results of the API call and just used the default `fetch`.

```ts [getTrainTimes.ts]
async function fetchTrainTimes(
  preferences: Preferences
): Promise<TrainResponse> {
  const url = `https://api1.raildata.org.uk/1010-live-departure-board-dep1_2/LDBWS/api/20220120/GetDepartureBoard/${preferences.startStation}?numRows=10&filterCrs=${preferences.endStation}&filterType=to&timeOffset=${preferences.timeOffset}&timeWindow=${preferences.timeWindow}`;

  const response = await fetch(url, {
    method: "GET",
    headers: headersList,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export function useTrainTimes() {
  const preferences = getPreferenceValues<Preferences>();

  return useCachedPromise(async () => fetchTrainTimes(preferences), [], {
    keepPreviousData: true,
    execute: true,
  });
}
```

I added a couple of preferences to the extension to allow the user to set the start and end station.

```ts [types/preferences.ts]
export interface Preferences {
  startStation: string;
  endStation: string;
}
```

Then to render the results in Raycast it was as simple as using the `useTrainTimes` hook in a `List.Item` component.

```tsx [components/TrainTimes.tsx]
  return (
    <List
      isLoading={isLoading}
      navigationTitle="Next Trains"
      searchBarPlaceholder="Search trains..."
      throttle
    >
      {data?.trainServices?.length ? (
        <List.Section title="Upcoming Trains">
          {data.trainServices.map((train: TrainService) => (
            <List.Item
              key={train.serviceID}
              title={`${train.destination[0].locationName} ${train.destination[0].via ? `(${train.destination[0].via})` : ""}`}
              subtitle={`${train.std} ${train.etd !== "On time" ? `(${train.etd})` : ""}`}
              accessories={[
                {
                  text: train.platform
                    ? `Platform ${train.platform}`
                    : "No platform",
                },
                { text: train.operator },
              ]}
              icon={getStatusIcon(train)}
            />
          ))}
        </List.Section>
      ) : (
        <List.EmptyView
          title="No trains found"
          description="Try checking your station codes at https://en.wikipedia.org/wiki/UK_railway_stations_%E2%80%93_A or adjusting your time window"
          icon={Icon.Train}
        />
      )}
    </List>
  );
}
```

## Conclusion

I'm happy with how the extension turned out and it's something I've been using daily since I built it. I've since deployed it to the organisation for the team to use and hopefully it's been useful for them.

I would like for it to refetch automatically but Raycast only lets this happen if you use the 'no-view' option which means there wouldn't be a longer breakdown which is useful.

If you think this extension would be useful for you let me know via 𝕏 and I'll clean up the code and add it to the raycast extension directory.
