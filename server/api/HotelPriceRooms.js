const bookHotel = async (offerId, guestInfo, paymentInfo) => {
  try {
    const url = `https://test.api.amadeus.com/v1/booking/hotel-bookings`;
    console.log(`Booking hotel with offer ID: ${offerId}`);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        offerId: offerId,
        guests: [guestInfo],
        payments: [paymentInfo],
      }),
    });

    console.log(`Response Status: ${response.status}`);
    console.log(`Content-Type: ${response.headers.get("Content-Type")}`);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`API error: ${errorBody}`);
      throw new Error(`Network response was not ok: ${errorBody}`);
    }

    const data = await response.json();
    console.log("Booking confirmation:", data);
    return data;
  } catch (error) {
    console.error("Error booking hotel:", error);
    return null;
  }
};

// Example usage
const guestInfo = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1234567890",
};

const paymentInfo = {
  method: "creditCard",
  card: {
    number: "4111111111111111",
    expiry: "2023-12",
    cvv: "123",
  },
};

bookHotel("OFFER_ID", guestInfo, paymentInfo).then((data) => {
  console.log("Booking Data:", data);
});

const fetchHotelOffers = async (hotelIds) => {
  try {
    const url = `https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=${hotelIds.join(
      ","
    )}`;
    console.log(`Fetching data from URL: ${url}`);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log(`Response Status: ${response.status}`);
    console.log(`Content-Type: ${response.headers.get("Content-Type")}`);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`API error: ${errorBody}`);
      throw new Error(`Network response was not ok: ${errorBody}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching hotel offers:", error);
    return null;
  }
};

// Usage
fetchHotelOffers(["HID1", "HID2"]).then((data) => {
  console.log("Hotel Offers:", data);
});