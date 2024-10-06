import community from "../assets/community.jpg";
import gym from "../assets/gym.jpg";
import sports from "../assets/sports.jpg";
import wifi from "../assets/wifi.jpg";
import rate from "../assets/rate.jpg";
import lounge from "../assets/lounge.jpg";
import quick from "../assets/quick.jpg";
import cafe from "../assets/cafe.jpg";
import card_1 from "../assets/card_1.jpg";
import card_2 from "../assets/card_2.jpg";
import card_3 from "../assets/card_3.jpg";
import card_4 from "../assets/card_4.jpg";
import card_5 from "../assets/card_5.jpg";

export const benefitCards = [
  { image: community, text: "Community Events", key: 1 },
  { image: gym, text: "Gym Facilities", key: 2 },
  { image: wifi, text: "High Speed Wifi", key: 3 },
  { image: cafe, text: "Cafe & Tea Bar", key: 4 },
  { image: rate, text: "Affordable", key: 5 },
  { image: lounge, text: "Comfort Lounges", key: 6 },
  { image: quick, text: "Quick Booking", key: 7 },
  { image: sports, text: "Sports Area", key: 8 },
];

export const jsonData = [
  {
    id: "39ab7642-8de3-4e95-aa5d-34089bc67b90",
    name: "Platinum, Indiranagar",
    address:
      "271, 6th Main Rd, HAL 2nd Stage, Motappapalya, Indiranagar, Bengaluru, Karnataka 560038, India",
    latitude: 12.9732196,
    longitude: 77.6406548,
    google_maps_url:
      "https://www.google.com/maps/place/BHIVE+Workspace+Platinum+Indiranagar/@12.9732196,77.6406548,15z/data=!4m2!3m1!1s0x0:0x310e3359eaf1ee4f?sa=X&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAg9EAA&hl=en-US&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAhNEAgm/maps/place/BHIVE+Workspace+Indiranagar/@12.9789187,77.6404881,17z/data=!4m6!3m5!1s0x3bae141e007a849d:0xbff26c814318fc77!8m2!3d12.9789187!4d77.643063!16s%2Fg%2F11bxf3zpnf?entry=ttu",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560038",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: card_1,
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    contact_person_name: "Lavena",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 499,
    day_pass_discounts_percentage: {
      1: {
        value: 0,
        message: "",
      },
      10: {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
  },
  {
    id: "f87f54e2-6ce4-4bc5-bed7-587b361b5633",
    name: "JBR Campus, Whitefield",
    address:
      "Plot No. 77, Jbr Tech Park, 6th Rd, Whitefield, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066, India",
    latitude: 12.978337,
    longitude: 77.727572,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560066",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: card_2,
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      1: {
        value: 0,
        message: "",
      },
      10: {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "292caef7-95a4-493d-9575-5524b12eb0a5",
    name: "HSR Sector 6 Service Road, Silkboard",
    address:
      "L-194, Santhosapuram, Sector 6, HSR Layout, Bengaluru, Karnataka 560101, India",
    latitude: 12.9180167,
    longitude: 77.6247532,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560101",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: card_3,
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      1: {
        value: 0,
        message: "",
      },
      10: {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "471c30b4-e91c-4392-9ebe-b4c1ad4a7b63",
    name: "HSR Campus",
    address:
      'BHIVE Workspace - No.112, AKR Tech Park, "A" and, B-Block, 7th Mile Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068, India',
    latitude: 12.8926389,
    longitude: 77.6417601,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560068",
    description: null,
    rules: null,
    amenities: null,
    images: card_4,
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      1: {
        value: 0,
        message: "",
      },
      10: {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
  {
    id: "298a504d-c5cd-4456-a132-e3a8f18a4a43",
    name: "27th Main, HSR",
    address: "27th Main Rd, Bengaluru, Karnataka, India",
    latitude: 12.9120089,
    longitude: 77.6518831,
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    postal_code: "560102",
    description: null,
    rules: null,
    amenities: ["Conferencing facilities", "Parking"],
    images: card_5,
    working_hours_start: "00:00",
    working_hours_end: "23:59",
    facilities: null,
    is_active: true,
    is_day_pass_enabled: true,
    day_pass_price: 249,
    day_pass_discounts_percentage: {
      1: {
        value: 0,
        message: "",
      },
      10: {
        value: 20,
        message: "Pay for 8 Days, Get 2 Days Complimentary",
      },
    },
    manager_id: null,
    can_edit: false,
  },
];
