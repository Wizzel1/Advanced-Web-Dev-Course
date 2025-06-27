
function findNeedle(haystack: Array<string>) {
    const index = haystack.findIndex((item) => item === "needle")  
    if (index < 0) {
        console.log("no needle found")
    } else { 
        console.log(`found the needle at position ${index}`)
    }
}


findNeedle(["hay", "junk", "random", "needle", "more junk"])
// "found the needle at position 3"

findNeedle(["needle"])
// "found the needle at position 0"

findNeedle(["foo", "bar", "baz", "needle", "qux"])
// "found the needle at position 3"

findNeedle(["one", "two", "three", "four", "needle"])
// "found the needle at position 4"

findNeedle(["junk", "more junk", "needle", "even more junk"])
// "found the needle at position 2"