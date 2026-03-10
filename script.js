document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons initialization
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Reveal on scroll (Throttled for better performance)
    let isScrolling = false;
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
        isScrolling = false;
    };

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(revealOnScroll);
            isScrolling = true;
        }
    });
    revealOnScroll(); // Initial check

    // Donation Amount Selection
    const amtButtons = document.querySelectorAll('.amt-btn');
    const customAmtInput = document.getElementById('custom-amount');
    const finalDonateBtn = document.getElementById('final-donate-btn');

    if (amtButtons && customAmtInput) {
        amtButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                amtButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Update input field
                customAmtInput.value = btn.getAttribute('data-amount');
            });
        });

        // If user manually types in custom amount, remove active states from buttons
        customAmtInput.addEventListener('input', () => {
            amtButtons.forEach(b => b.classList.remove('active'));
        });
    }

    if (finalDonateBtn) {
        finalDonateBtn.addEventListener('click', () => {
            const amount = customAmtInput.value;
            console.log(`Redirecting to donation with amount: ${amount}`);
            window.location.href = 'https://play.google.com/store/apps/details?id=tn.mobipost&hl=en';
        });
    }

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const currentItem = header.parentElement;
                const isActive = currentItem.classList.contains('active');

                // Close all other items
                document.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Toggle current item
                if (!isActive) {
                    currentItem.classList.add('active');
                }
            });
        });
    }

    // Gallery Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (filterButtons && galleryCards) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterValue = btn.getAttribute('data-filter');

                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter cards
                galleryCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Small timeout to allow reveal animation if re-added
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }
});
