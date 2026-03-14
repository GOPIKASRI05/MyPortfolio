import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "lucide-react/icons": path.resolve(__dirname, "node_modules/lucide-react/dist/esm/icons"),
    },
  },
  plugins: [react()],
});