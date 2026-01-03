import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/flags/src/Flags",
    }),
    flat({
        entries: "./packages/flags/src",
        include: ["*", "Flags/index.js"],
    }),
])
