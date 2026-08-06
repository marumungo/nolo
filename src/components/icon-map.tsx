import {
  ChairBlueprint,
  LampBlueprint,
  ModuleBlueprint,
  ShelfBlueprint,
  SofaBlueprint,
  TableBlueprint,
} from "./blueprint-icons";
import type { IconKey } from "@/lib/products";

export const iconMap: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  chair: ChairBlueprint,
  table: TableBlueprint,
  sofa: SofaBlueprint,
  shelf: ShelfBlueprint,
  lamp: LampBlueprint,
  module: ModuleBlueprint,
};
