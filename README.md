

---

# 🌍 My Travel and Tours App ✈️

Welcome to the Travel and Tours App! This application allows users to explore flights, hotels, and make bookings seamlessly. Whether you're planning a business trip or a vacation, our app provides everything you need to arrange your travel efficiently.

## 📝 User Stories
- 🛫 **Users can browse** through a wide range of travel options.
- 🛬 **Users can view flights** with detailed information such as departure times, airlines, and pricing.
- 📅 **Users can book** their preferred flights and hotels with ease.
- 🏨 **Users can view a list of hotels** available at their destination, complete with amenities and pricing.
- 🔍 **Users can search** the list of hotels and flights to find the best options that suit their needs.
- 💼 **Users can manage their bookings** and receive confirmation notifications.
- ⭐ **Users can read reviews** for hotels and flights, helping others make informed decisions.

## 🚀 Features
- **Dark/Light Mode Toggle**: Users can switch between dark and light themes for a personalized experience.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience on both mobile and desktop devices.
- **Search Functionality**: Advanced search filters allow users to find exactly what they're looking for.
- **Local Storage**: User data and preferences are saved locally to enhance user experience across sessions.

## 🛠️ Installation
To get started with the Travel and Tours App, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/travel-and-tours-app.git
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Navigate to the App**:
   - Open your browser and go to `http://localhost:3000` to view the app.

## 🧰 Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router**: For routing and navigation.
- **Local Storage**: For persisting user data.
- **API Integration**: Fetches hotel, reviews and flight data from third-party APIs.

## 📦 Extensions We Need
- 🌐 **GitHub Preview**: Add a GitHub preview extension to enhance repository visibility.


## 📚 Documentation
- **API Documentation For Booking.com**: 
- const fetchHotels = async () => {
      try {
        // Fetch hotel data from Booking.com API
        const response = await fetch(
          "https://booking-com.p.rapidapi.com/v1/hotels/search?" +
            new URLSearchParams({
              checkin_date: "2024-12-01",
              checkout_date: "2024-12-02",
              units: "metric",
              room_number: "1",
              adults_number: "1",
              dest_id: "-1456928", // Example destination ID
              dest_type: "city",
              order_by: "popularity",
              locale: "en-gb",
              filter_by_currency: "USD",
              include_adjacency: "true",
            }),
          {
            headers: {
              "X-RapidAPI-Key": BOOKING_API_KEY,
              "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            },
          }
        ); } }
- **API Documentation For Amadeus.com**: 
- **Component Structure**: Overview of the React component structure and their functionalities.
- **Theming**: 
- ## 🎨 Theming

Our Travel and Tours App supports both dark and light themes, allowing users to customize their viewing experience. Here's how the theming works and how you can customize it:

### 1. **Theme Context and Provider**
- **Theme.js** contains a context and provider that manages the current theme (`light` or `dark`).
- The `ThemeProvider` component wraps the entire application, providing the theme context to all components.
- Components can access the current theme using the `useTheme` hook.

### 2. **CSS Classes for Theming**
- The application's styling is handled by CSS and Tailwind classes that respond to the current theme.
- For example, the `bg-gray-900` class applies a dark grey background in dark mode, while `bg-cream` is used in light mode.
- These classes are conditionally applied based on the theme context.

### 3. **Customizing the Theme**
- To customize the theme, you can modify the CSS classes or add new ones in your stylesheet (`index.css` or `App.css`).
- Example:
  ```css
  .light {
    --background-color: #f7f6e7;
    --text-color: #000;
  }

  .dark {
    --background-color: #1a202c;
    --text-color: #fff;
  }






## 🧑‍💻 Authors
- **Elizabeth Kujore** (https://github.com/Elizabethcodes44)

---

