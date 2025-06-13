// // import { defineConfig } from "vite"
// // import react from "@vitejs/plugin-react-swc"
// // import mkcert from "vite-plugin-mkcert"
// // import framer from "vite-plugin-framer"

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //     plugins: [react(), mkcert(), framer()],
// //     build: {
// //         target: "ES2022",
// //     },
// // })

// import { defineConfig } from "vite"
// import react from "@vitejs/plugin-react-swc"
// import mkcert from "vite-plugin-mkcert"
// import framer from "vite-plugin-framer"

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react(), mkcert(), framer()],
//     server: {
//         host: "0.0.0.0",
//         port: 5174, // Optional: use same port as before
//         https: true // Optional: because you're using mkcert for HTTPS
//     },
//     build: {
//         target: "ES2022",
//     },
// })


import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
    },
    host: true, // bind to 0.0.0.0
    port: 5179
  }
})
