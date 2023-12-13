import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faqList = [
    {
        "question": "What is DJILI and how does it work?",
        "answer": "DJILI is an online platform facilitating the buying and selling of automotive parts. It simplifies transactions between vendors and buyers, offering an easy-to-use interface for listing parts and engaging in transactions."
    },
    {
        "question": "What powers DJILI?",
        "answer": "DJILI operates using:\n- Java and Spring Boot for the backend.\n- Angular for the frontend.\n- Apache as the web server.\n- SQL Server for managing the database."
    },
    {
        "question": "What can I do on DJILI?",
        "answer": "- List and browse automotive parts.\n- Manage transactions securely.\n- Use a shopping cart for purchases.\n- Get notifications and manage subscriptions.\n- Share reviews on automotive parts."
    },
    {
        "question": "How is DJILI's architecture structured?",
        "answer": "DJILI follows a Two-Tier Architecture to enhance performance by placing the SQL server and backend on the same machine, optimizing user interactions with the database."
    },
    {
        "question": "What does the backend of DJILI offer?",
        "answer": "The backend provides endpoints for user management, product listing, cart management, transactions, notifications, payments, subscriptions, and reviews."
    },
    {
        "question": "Why the Two-Tier Architecture for DJILI?",
        "answer": "The Two-Tier Architecture improves performance by reducing latency and speeding up interactions with the database, ultimately enhancing user experience."
    },
    {
        "question": "How is DJILI deployed?",
        "answer": "DJILI's deployment includes EC2 instances, load balancers, auto-scaling, and S3 storage for high availability, scalability, and efficient traffic management."
    },
    {
        "question": "Where can I find support for DJILI?",
        "answer": "For assistance or further information, visit our Contact Us page or email our customer support team at support@email.com."
    },
    {
        "question": "What user-friendly features does DJILI offer for registration and authentication?",
        "answer": "DJILI provides an intuitive registration process, allowing users to sign up seamlessly using either email credentials or social media accounts. Additionally, it ensures secure authentication mechanisms for accessing personalized features."
    },
    {
        "question": "How comprehensive is the product browsing and search functionality on DJILI?",
        "answer": "DJILI enhances the browsing experience by enabling buyers to effortlessly search for automotive parts using filters such as make, model, year, and part type. It also ensures that detailed product information, including descriptions, specifications, and images, is readily available for informed decision-making."
    },
    {
        "question": "Can sellers efficiently manage their inventory on DJILI?",
        "answer": "Sellers on DJILI have access to robust inventory management tools, enabling them to update stock levels, list new automotive parts with detailed information, and monitor inventory to prevent overselling."
    },
    {
        "question": "What options are available for secure and seamless payments on DJILI?",
        "answer": "DJILI offers a secure payment process that supports multiple payment options, ensuring a smooth transaction experience for buyers. Transparent billing statements containing fees and commissions associated with sales are provided for building trust between buyers and sellers."
    },
    {
        "question": "How does DJILI handle user reviews and ratings for automotive parts?",
        "answer": "DJILI allows buyers to leave authentic reviews and ratings for purchased automotive parts, facilitating well-informed purchase decisions. Sellers are encouraged to promptly respond to customer feedback, ensuring continuous improvement in their goods and services."
    },
    {
        "question": "What kind of reporting and analytics tools are available on DJILI?",
        "answer": "DJILI provides comprehensive reporting and analytics tools for administrators, sellers, and buyers. These tools offer valuable insights such as sales reports, user activity statistics, and inventory performance analytics, enabling informed decision-making and identification of improvement areas."
    }
];
}
