import { framer } from "framer-plugin"

// Plugin configuration
framer.showUI({
    position: "top right",
    width: 280,
    height: 200,
})

// Main plugin function
export default function SimpleInputPlugin() {

    // Function to check if a form is selected
    const checkFormSelection = async () => {
        try {
            const selection = await framer.getSelection()

            if (!selection || selection.length === 0) {
                framer.notify("⚠️ Please select a form tag first", { variant: "error" })
                return false
            }

            const selectedElement = selection[0]
            console.log("Selected Element:", selectedElement)

            const isForm = ["form", "framerform"].some(keyword =>
                (selectedElement.name || "").toLowerCase().includes(keyword) ||
                (selectedElement.componentName || "").toLowerCase().includes(keyword)
            )

            if (!isForm) {
                framer.notify("⚠️ Please select a form tag to insert components", { variant: "error" })
                return false
            }

            return true
        } catch (error) {
            console.error("Selection check failed:", error)
            framer.notify("⚠️ Please select a form tag first", { variant: "error" })
            return false
        }
    }

    // Insert input field
    const addInputField = async () => {
        const selection = await framer.getSelection()
        const isFormSelected = await checkFormSelection()
        if (!isFormSelected) return

        const parentId = selection[0]?.id

        try {
            await framer.insertComponent({
                url: "https://framer.com/m/updateinput-RNMo.js@2UeUMrE27OK9CEEJsygF",
                name: "Input Field",
                parentId: parentId,
                position: {
                    type: "inside",
                    index: 0
                }
            })
            framer.notify("✅ Input field added!", { variant: "success" })
        } catch (error) {
            console.error("Method 1 failed:", error)
            try {
                await framer.addComponentInstance({
                    componentId: "input-field-w6Zj",
                    url: "https://framer.com/m/updateinput-RNMo.js@2UeUMrE27OK9CEEJsygF",
                    parentId: parentId,
                    position: {
                        type: "inside",
                        index: 0
                    }
                })
                framer.notify("✅ Input field added!", { variant: "success" })
            } catch (error2) {
                console.error("Method 2 failed:", error2)
                framer.notify("❌ Failed to add input field", { variant: "error" })
            }
        }
    }

    // Insert business email
    const addBusinessEmail = async () => {
        const selection = await framer.getSelection()
        const isFormSelected = await checkFormSelection()
        if (!isFormSelected) return

        const parentId = selection[0]?.id

        try {
            await framer.insertComponent({
                url: "https://framer.com/m/businessmail-FENL.js@vm2gqQWI416mjYgW1ZQ0",
                name: "Business Email",
                parentId: parentId,
                position: {
                    type: "inside",
                    index: 0
                }
            })
            framer.notify("✅ Business email added!", { variant: "success" })
        } catch (error) {
            console.error("Method 1 failed:", error)
            try {
                await framer.addComponentInstance({
                    componentId: "businessmail-FENL",
                    url: "https://framer.com/m/businessmail-FENL.js@vm2gqQWI416mjYgW1ZQ0",
                    parentId: parentId,
                    position: {
                        type: "inside",
                        index: 0
                    }
                })
                framer.notify("✅ Business email added!", { variant: "success" })
            } catch (error2) {
                console.error("Method 2 failed:", error2)
                framer.notify("❌ Failed to add business email", { variant: "error" })
            }
        }
    }

    // UI
    return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif", backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <h3 style={{ margin: "0 0 16px", fontSize: "16px", textAlign: "center" }}>
            Add Components
        </h3>

        <div style={{
            padding: "8px 12px",
            backgroundColor: "var(--warning-bg)",
            border: "1px solid var(--warning-border)",
            borderRadius: "6px",
            marginBottom: "12px"
        }}>
            <p style={{
                margin: 0,
                fontSize: "11px",
                color: "var(--warning-text)",
                textAlign: "center"
            }}>
                ⚠️ Select a form tag before inserting
            </p>
        </div>

        <button
            onClick={addInputField}
            style={{
                padding: "12px 16px",
                backgroundColor: "var(--btn-primary-bg)",
                color: "var(--btn-text)",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                width: "100%",
                marginBottom: "8px"
            }}
        >
            ➕ Insert Country Code Field
        </button>

        <button
            onClick={addBusinessEmail}
            style={{
                padding: "12px 16px",
                backgroundColor: "var(--btn-secondary-bg)",
                color: "var(--btn-text)",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                width: "100%"
            }}
        >
            📧 Insert Business Email Field
        </button>

        <p style={{
            marginTop: "12px",
            fontSize: "11px",
            color: "var(--footer-text)",
            textAlign: "center",
            lineHeight: "1.3"
        }}>
            Components will only insert into form tags
        </p>
    </div>
)

}

// Plugin manifest
export const manifest = {
    name: "Component Inserter",
    description: "Insert input field and business email components into form tags only",
    version: "2.1.0",
}
