import { defineConfig, PluginOption } from "vite"
import react from "@vitejs/plugin-react"

const plugins: PluginOption[][] = [react()]

export default defineConfig({ plugins })
