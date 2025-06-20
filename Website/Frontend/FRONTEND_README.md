# 🌟 Frontend Structure Guide (For Absolute Beginners)

This explains all the folders and files in your React frontend - no tech jargon!

## 🏠 Home Address: `public/`
- **Static files that never change**
  - `index.html` = The ONLY HTML file (like your house's foundation)
  - `favicon.ico` = The little icon in your browser tab (like your house's mailbox decoration)

## 📦 Main Toolbox: `src/`
All your working files live here!

### 1. `api/` - 📞 Phone Calls to Backend
- `api.ts` = Your phonebook for talking to the backend  
  (Example: "Hey backend, give me user data!")

### 2. `assets/` - 🎨 Art Supplies
- `images/` = Where all pictures live (like a photo album)  
- `styles/` = Global CSS/SCSS (paint colors for your whole app)

### 3. `components/` - 🔧 Lego Blocks
- `common/` = Most-used pieces:  
  - `Button.tsx` = Like a doorbell (press it to do things)  
  - `Input.tsx` = Like a mailbox slot (where users type stuff)  
- `ui/` = Pretty display pieces:  
  - `Card.tsx` = Like a picture frame (displays content nicely)  
  - `Modal.tsx` = Like a pop-up notification (appears on top)

### 4. `pages/` - 🚪 Rooms in Your House
- `Home/` = Living room (main page everyone sees)  
  - `HomePage.tsx` = The furniture arrangement  
- `Auth/` = Front door security  
  - `LoginPage.tsx` = Where you type your password  
  - `SignupPage.tsx` = Where new users register

### 5. `routes/` - 🗺️ House Map
- `AppRoutes.tsx` = Like a GPS that says:  
  - "If you're at /login → show LoginPage"  
  - "If you're at /dashboard → show DashboardPage"

### 6. `stores/` - 🧠 Brain Memory
- `authStore.ts` = Remembers if you're logged in  
  (Like a sticky note that says "User is logged in!")

### 7. `utils/` - � Helper Tools
- `helpers.ts` = Frequently used tools:  
  - Format dates ("Jan 1" instead of "2024-01-01")  
  - Shorten long text ("Hello..." instead of "Hello world this is...")

## 🏗️ Important Blueprint Files
1. `App.tsx` = **Main assembly area** (where all components connect)  
2. `main.tsx` = **Starter button** (the first file that runs)  
3. `package.json` = **Shopping list** (all tools your app needs)  

## 🔄 How Everything Works Together
1. User clicks a link →  
2. `AppRoutes.tsx` picks the right page →  
3. Page uses components (Buttons, Cards) →  
4. Components fetch data via `api.ts` →  
5. `authStore.ts` remembers login state →  
6. Everything displays in `App.tsx`

## 💡 Pro Tips
1. Add new pages in the `pages/` folder
2. Reuse components instead of making new ones
3. Keep images organized in `assets/images/`
4. Global styles go in `assets/styles/`


`I set up a basic hello world currently`
# How to run the program (Use Command Prompt)
`Terminal 1:`
cd backend
npm run dev
ctrl click link

`Terminal 2:`
cd frontend
npm run dev
ctrl Click link

Backend Server: localhost:5000 
Should print `Hello World from backend!`

Frontend Server: localhost:5173
Should print  `Hello from frontend!`
              `Backend says: Hello World from backend!`