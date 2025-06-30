class MathHelper {
    static circleArea(radius: number) {
        return Math.PI * radius * radius;
    }
}

// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5