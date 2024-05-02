# Twitter-X Clone with Next.js 14

This project is a Twitter-X clone built using Next.js 14, Tailwind CSS, TypeScript, Redux, and Firebase. It was inspired by the Frontend Simplified bootcamp.

## Features

- **Next.js 14**: Utilizing the latest version of Next.js for server-side rendering and static site generation.
- **Tailwind CSS**: Styling the application with Tailwind CSS for rapid UI development.
- **TypeScript**: Enhancing code quality and maintainability with TypeScript's static typing.
- **Redux**: Managing application state with Redux for predictable and centralized state management.
- **Firebase**: Integrating Firebase for real-time data synchronization and authentication.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Firebase project set up with Firestore and Authentication enabled

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/twitter-x-clone.git
```

2. Navigate to the project directory:

```bash
cd twitter-x-clone
```

3. Install dependencies:

```bash
npm install
```

4. Set up Firebase configuration:

   - Copy the Firebase config from your Firebase project settings.
   - Create a `.env.local` file in the root directory.
   - Add your Firebase config to the `.env.local` file:

   ```plaintext
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deployment

To deploy the application, follow the deployment instructions for Next.js applications. Ensure that you set up environment variables for your production Firebase configuration.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature implementations, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

