import { getPriorityAPI, getStatusesAPI, getTypeAPI } from "@/api/masterApi";
import { defineStore, StoreDefinition } from "pinia";

export interface UseMasterState {
  statuses: string[];
  priority: string[];
  type: string[];
}

export interface UseMasterActions {
  getStatuses(): Promise<void>;
  getPriority(): Promise<void>;
  getType(): Promise<void>;
}

export const useMasterStore: StoreDefinition<
  "master",
  UseMasterState,
  {},
  UseMasterActions
> = defineStore("master", {
  state: (): UseMasterState => ({
    statuses: [],
    priority: [],
    type: [],
  }),

  actions: {
    async getStatuses() {
      try {
        const data = await getStatusesAPI();
        this.statuses = data;
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    },
    async getPriority() {
      try {
        const data = await getPriorityAPI();
        this.priority = data;
      } catch (error) {
        console.error("Failed to fetch priority:", error);
      }
    },
    async getType() {
      try {
        const data = await getTypeAPI();
        this.type = data;
      } catch (error) {
        console.error("Failed to fetch priority:", error);
      }
    },
  },

  persist: true,
});
