// Mock data to simulate a global feed of users
const mockPosts = [
    {
        name: "Sarah Jenkins",
        location: "New York, USA 🇺🇸",
        initial: "S",
        color: "linear-gradient(135deg, #0a74da 0%, #00d2ff 100%)",
        milestone: "2 Years Sober",
        text: "Today marks exactly two years. If you're reading this and you're on Day 1, keep going. It gets so much better. The fog lifts, and life becomes beautiful again.",
        likes: 124,
        time: "Just now"
    },
    {
        name: "David Silva",
        location: "São Paulo, Brazil 🇧🇷",
        initial: "D",
        color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        milestone: "90 Days Clean",
        text: "Got my 90-day chip today. The withdrawal was the hardest thing I've ever done, but waking up without that awful dependence is the ultimate freedom. Sending love to everyone here.",
        likes: 89,
        time: "2 hours ago"
    },
    {
        name: "Liam O'Connor",
        location: "Dublin, Ireland 🇮🇪",
        initial: "L",
        color: "linear-gradient(135deg, #FF9A44 0%, #FC6076 100%)",
        milestone: "1 Week",
        text: "First week is done. I'm struggling with sleep, but reading through this global feed gives me hope that the peace of mind is worth the current battle.",
        likes: 312,
        time: "5 hours ago"
    },
    {
        name: "Priya Patel",
        location: "Mumbai, India 🇮🇳",
        initial: "P",
        color: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)",
        milestone: "5 Years",
        text: "Five years ago today, I made the choice to live. Recovery isn't just about stopping a bad habit; it's about building a life you don't need to escape from. You've got this.",
        likes: 450,
        time: "8 hours ago"
    }
];

// Function to render the feed
function renderFeed() {
    const feedContainer = document.getElementById('feed-container');
    feedContainer.innerHTML = ''; // Clear container

    mockPosts.forEach(post => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'feed-card fade-in-up';
        
        cardContainer.innerHTML = `
            <div class="user-avatar" style="background: ${post.color}">
                ${post.initial}
            </div>
            <div class="post-content">
                <div class="post-header">
                    <div>
                        <span class="user-name">${post.name}</span>
                        <span class="user-location"> • ${post.location}</span>
                    </div>
                    <span class="post-time">${post.time}</span>
                </div>
                <div class="post-milestone">🌟 ${post.milestone}</div>
                <p class="post-text">"${post.text}"</p>
                <div class="post-actions">
                    <div class="action-btn">
                        <span class="icon">🤍</span> ${post.likes}
                    </div>
                    <div class="action-btn">
                        <span class="icon">💬</span> Reply
                    </div>
                </div>
            </div>
        `;
        
        feedContainer.appendChild(cardContainer);
    });
}

// Add interaction to the milestone edit (just a small alert for the prototype)
document.querySelector('.edit-icon').addEventListener('click', () => {
    alert('In the full version, you can set your sobriety start date here, and the tracker will auto-update every day!');
});

// Run when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    renderFeed();
});
