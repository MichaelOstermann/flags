import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/flags/",
    description: "Functional utilities for bitwise flags.",
    title: "flags",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            { base: "/Flags/", text: "Flags", items: [
                { link: "addAll", text: "addAll" },
                { link: "add", text: "add" },
                { link: "assert", text: "assert" },
                { link: "difference", text: "difference" },
                { link: "fromRecord", text: "fromRecord" },
                { link: "hasAll", text: "hasAll" },
                { link: "hasAny", text: "hasAny" },
                { link: "hasNone", text: "hasNone" },
                { link: "has", text: "has" },
                { link: "intersection", text: "intersection" },
                { link: "invert", text: "invert" },
                { link: "isDisjointFrom", text: "isDisjointFrom" },
                { link: "isSubsetOf", text: "isSubsetOf" },
                { link: "isSupersetOf", text: "isSupersetOf" },
                { link: "isValid", text: "isValid" },
                { link: "removeAll", text: "removeAll" },
                { link: "remove", text: "remove" },
                { link: "symmetricDifference", text: "symmetricDifference" },
                { link: "toggleAll", text: "toggleAll" },
                { link: "toggle", text: "toggle" },
                { link: "toRecord", text: "toRecord" },
                { link: "types", text: "types" },
                { link: "union", text: "union" },
            ] },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/flags" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
