function timeLeft(targetDateTime) {
    const now = new Date();
    const targetDate = new Date(targetDateTime);
    if (targetDate < now) {
        return "On going";
    }
    const diffMs = targetDate - now;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return (`${diffHours}h ${diffMinutes}m`);
}

module.exports={timeLeft}