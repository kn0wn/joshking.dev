export interface NotableProject {
  title: string;
  role: string;
  description: string;
  order?: number;
  period?: string;
}

/** Sorted by `order` then title. */
export const NOTABLE_PROJECTS: NotableProject[] = [
  {
    title: "Spatial IDE",
    role: "Architect · Electron · spatial IDE",
    description:
      "IDE on an infinite canvas where multiple repos coexist as spatial panels. Embedded agents scaffold and generate code per panel, letting developers multitask across projects simultaneously.",
    order: 1,
  },
  {
    title: "Agent Mesh",
    role: "Architect · TypeScript · cloud multi-agent platform",
    description:
      "General-purpose personal agents paired with users on a cloud platform. Shared memory powered by NanoClaw with single-tenant isolation and optional org-wide context. Tool registry with RBAC at the tool and agent level.",
    order: 2,
  },
  {
    title: "GUM",
    role: "Lead · TypeScript · headless design system",
    description:
      "Headless component library with Angular, Vue, and Svelte adapters. 10-30 components built to internal Google style guides with best-practice accessibility throughout. Used in production at Google.",
    order: 3,
  },
  {
    title: "NotBotAPI",
    role: "Solo · Java · heuristic prototype",
    description:
      "Injected sidecar for studying automated detection systems. Observed client input streams to capture click timing, path curvature, camera jitter, and idle gaps, then replayed raw sampled distributions to approximate human behaviour.",
    order: 4,
  },
  {
    title: "Revision",
    role: "Solo · Java · reflection-injected",
    description:
      "Minecraft client built via Java reflection injection as a deep learning exercise in graphics programming and runtime manipulation. Flagship feature was a true ESP overlay that rendered target blocks through terrain using occlusion-aware culling with a configurable blocklist.",
    order: 5,
  },
].sort((a, b) => {
  const ao = a.order ?? Infinity;
  const bo = b.order ?? Infinity;
  if (ao !== bo) return ao - bo;
  return a.title.localeCompare(b.title);
});
