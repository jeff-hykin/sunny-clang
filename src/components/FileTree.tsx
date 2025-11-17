import { React, useState } from "../../deps.ts"
// import "./App.css"
import { Folder } from "./Folder.jsx"

const useTraverseTree = () => {
    function insertNode(tree, folderId, itemName, isFolder) {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: itemName,
                isFolder,
                items: [],
            })
            return tree
        }

        tree.items.map((obj) => {
            let res = insertNode(obj, folderId, itemName, isFolder)
            if (res) {
                return res
            }
        })
    }
    function deleteNode(tree, folderId) {
        // base case: found the node to be deleted

        if (tree.id === folderId) {
            // Node found, return null to remove it from the parent
            return null
        }

        if (tree.items && tree.items.length > 0) {
            // If the node has children, recursively process them
            tree.items = tree.items.map((child) => deleteNode(child, folderId))
            // Remove null entries (nodes with matching "id") from the array
            tree.items = tree.items.filter(Boolean)
        }

        return { ...tree }
    }
    function updateNode(tree, folderId, itemName, isFolder) {
        if (tree.id === folderId) {
            // Node found, update its properties
            return {
                ...tree,
                name: itemName,
            }
        }

        if (tree.items && tree.items.length > 0) {
            tree.items = tree.items.map((child) => updateNode(child, folderId, itemName))
        }

        return { ...tree }
    }
    return { insertNode, deleteNode, updateNode }
}

const folderData = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "index.html",
                    isFolder: false,
                    items: [],
                },
                {
                    id: "4",
                    name: "hello.html",
                    isFolder: false,
                    items: [],
                },
            ],
        },
        {
            id: "7",
            name: "src",
            isFolder: true,
            items: [
                {
                    id: "8",
                    name: "App.js",
                    isFolder: false,
                    items: [],
                },
                {
                    id: "9",
                    name: "Index.js",
                    isFolder: false,
                    items: [],
                },
                {
                    id: "10",
                    name: "styles.css",
                    isFolder: false,
                    items: [],
                },
            ],
        },
        {
            id: "11",
            name: "package.json",
            isFolder: false,
            items: [],
        },
    ],
}

export function FileTree() {
    const [explorerData, setExplorerData] = useState(folderData)
    const { insertNode, deleteNode, updateNode } = useTraverseTree()
    const handleInsertNode = (folderId, itemName, isFolder) => {
        const finalItem = insertNode(explorerData, folderId, itemName, isFolder)
        return finalItem
    }
    const handleDeleteNode = (folderId) => {
        // Call deleteNode to get the modified tree
        const finalItem = deleteNode(explorerData, folderId)
        // Update the explorerData state with the modified tree
        setExplorerData(finalItem)
    }

    const handleUpdateFolder = (id, updatedValue, isFolder) => {
        const finalItem = updateNode(explorerData, id, updatedValue, isFolder)
        // Update the explorerData state with the modified tree
        setExplorerData(finalItem)
    }

    return (
        <div className="folder-container">
            <Folder handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleUpdateFolder={handleUpdateFolder} explorerData={explorerData} />
        </div>
    )
}