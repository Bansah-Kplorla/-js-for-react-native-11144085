// Task 3: createUserProfiles function
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage
const names = ["Alice", "Bob", "Charlie", "Diana", "Edward"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "diana", "EDWARD"];

const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
// [
//     { originalName: "Alice", modifiedName: "ALICE", id: 1 },
//     { originalName: "Bob", modifiedName: "bob", id: 2 },
//     { originalName: "Charlie", modifiedName: "CHARLIE", id: 3 },
//     { originalName: "Diana", modifiedName: "diana", id: 4 },
//     { originalName: "Edward", modifiedName: "EDWARD", id: 5 }
// ]
