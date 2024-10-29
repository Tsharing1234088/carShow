

// Toggle Show More/Less Cars
function toggleShowMore() {
    const extraCars = document.querySelectorAll('.extra-car');
    const showMoreBtn = document.getElementById('show-more-btn');

    let isHidden = extraCars[0].style.display === 'none' || extraCars[0].style.display === '';

    extraCars.forEach(car => {
        car.style.display = isHidden ? 'block' : 'none';
    });

    showMoreBtn.textContent = isHidden ? 'Show Less' : 'Show More';
    console.log(`Show More clicked. Now showing extra cars: ${isHidden}`);
}

// Close Modal Function
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Car Details Object
const carDetails = {
    1: {
        name: 'Suzuki Jimny',
        description: 'A compact and versatile SUV perfect for city and off-road adventures.',
        price: '$50/day'
    },
    2: {
        name: 'Sedan',
        description: 'A comfortable and fuel-efficient sedan suitable for daily commutes.',
        price: '$65/day'
    },
    3: {
        name: 'Tesla Model S',
        description: 'A premium electric sedan with cutting-edge technology and performance.',
        price: '$120/day'
    },
    4: {
        name: 'Honda Civic',
        description: 'A reliable and stylish compact car with excellent fuel economy.',
        price: '$55/day'
    },
    5: {
        name: 'Toyota Corolla',
        description: 'A dependable and spacious sedan with modern features.',
        price: '$60/day'
    },
    6: {
        name: 'Tesla Model 3',
        description: 'An affordable electric sedan with impressive range and performance.',
        price: '$110/day'
    },
    7: {
        name: 'Tesla Model X',
        description: 'A versatile electric SUV with falcon-wing doors and spacious interiors.',
        price: '$150/day'
    },
    8: {
        name: 'Toyota Corolla Hybrid',
        description: 'A fuel-efficient hybrid sedan offering the best of both worlds.',
        price: '$65/day'
    }
};

// Show Details Function
function showDetails(carId) {
    const detailsModal = document.getElementById('details-modal');
    const modalContent = document.getElementById('modal-details-content');

    const selectedCar = carDetails[carId];

    if (selectedCar) {
        modalContent.innerHTML = `
            <h2>${selectedCar.name}</h2>
            <p>${selectedCar.description}</p>
            <p><strong>Price:</strong> ${selectedCar.price}</p>
        `;
        detailsModal.style.display = 'block';
    } else {
        modalContent.innerHTML = `<p>Car details not found.</p>`;
        detailsModal.style.display = 'block';
    }
}

// Book Car Function
function bookCar(carId) {
    const bookingModal = document.getElementById('booking-modal');
    const carIdInput = document.getElementById('car-id');

    carIdInput.value = carId;
    bookingModal.style.display = 'block';
}

// Handle Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const carId = document.getElementById('car-id').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Simple form validation
    if (name === '' || email === '' || phone === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Example: Send data to server (Here we'll just log it)
    console.log('Booking Details:', {
        carId,
        name,
        email,
        phone
    });

    // Show success message
    alert('Your booking has been submitted successfully!');

    // Reset the form
    document.getElementById('booking-form').reset();

    // Close the modal
    closeModal();
});

// Close modal when clicking outside of it
window.addEventListener('click', function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Optional: Close modal with ESC key
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize Carousel (optional)
var carouselElement = document.getElementById('testimonial-carousel');
var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000, // Slide every 5 seconds
    wrap: true // Loop around the slides
});

let menu = document.querySelector('#mobile-menu');
document.querySelector('.nav-icon').onclick = () => {
    menu.classList.toggle('active');
    menu.style.backgroundColor="rgba(13, 13, 44, 0.2);"
    menu.style.opacity="0.6"
};
