export function calculateEstimate(freightType, weight, miles) {
    let rate = 0;

    switch (freightType) {
        case "boxtruck":
            rate = weight > 10000 ? 3.5 : 3;
            break;

        case "dryvan":
            rate = weight > 30000 ? 4.5 : 4;
            break;

        case "flatbed":
            rate = weight > 30000 ? 5 : 4.5;
            break;

        case "reefer":
            rate = weight > 30000 ? 5 : 4.5;
            break;

        default:
            rate = 0;
    }

    return Math.round(miles * rate);
}