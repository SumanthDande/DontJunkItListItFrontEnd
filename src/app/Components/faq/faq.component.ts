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
      question: "What is DJILI and how does it work?",
      answer: "DJILI is an online platform facilitating the buying and selling of automotive parts. It simplifies transactions between vendors and buyers, offering an easy-to-use interface for listing parts and engaging in transactions."
      },
      {
      question: "What powers DJILI?",
      answer: "DJILI operates using:\n- Java and Spring Boot for the backend.\n- Angular for the frontend.\n- Apache as the web server.\n- SQL Server for managing the database."
      },
      {
      question: "What can I do on DJILI?",
      answer: "- List and browse automotive parts.\n- Manage transactions securely.\n- Use a shopping cart for purchases.\n- Get notifications and manage subscriptions.\n- Share reviews on automotive parts."
      },
      {
      question: "How is DJILI's architecture structured?",
      answer: "DJILI follows a Two-Tier Architecture to enhance performance by placing the SQL server and backend on the same machine. This setup optimizes user interactions with the database."
      },
      {
      question: "What does the backend of DJILI offer?",
      answer: "The backend provides endpoints for user management, product listing, cart management, transactions, notifications, payments, subscriptions, and reviews."
      },
      {
      question: "How is DJILI's database structured?",
      answer: "DJILI's database contains tables for Users, Products, Transactions, Car Parts, Cart, Notifications, Subscriptions, and User Reviews, ensuring efficient data storage and retrieval."
      },
      {
      question: "Why the Two-Tier Architecture for DJILI?",
      answer: "The choice of the Two-Tier Architecture improves performance by reducing latency and speeding up interactions with the database, ultimately enhancing user experience."
      },
      {
      question: "What do the Website Flowchart and UI Flow Diagram represent?",
      answer: "The Website Flowchart guides users through key pages like product listings, cart management, login, checkout, and order confirmation. The UI Flow Diagram illustrates user interactions on different screens."
      },
      {
      question: "How is DJILI deployed?",
      answer: "DJILI's deployment includes EC2 instances, load balancers, auto-scaling, and S3 storage for high availability, scalability, and efficient traffic management."
      },
      {
      question: "Where can I find support for DJILI?",
      answer: "For assistance or further information, visit our Contact Us page or email our customer support team at support@email.com."
      }
  ];
}
