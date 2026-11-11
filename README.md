# ProAuth IQ — Frontend

> **AI-assisted prior authorization for healthcare — evidence-grounded, policy-aware, explainable, and human-reviewed.**

This repository contains the **frontend** of ProAuth IQ, a web application that helps doctors, nurses and insurance reviewers create, track and review medical prior-authorization requests.

Prior authorization is the approval a health insurer requires before certain treatments, procedures or medications are covered. ProAuth IQ makes this process faster and clearer by showing the policy evidence, AI risk triage and request status on one screen.

The complete system (backend, ML model and documentation) is in the main project repository: [Prior-Authorization-NPN](https://github.com/Abdullah-218/Prior-Authorization-NPN).

---

## Features

- **Landing page and secure login** with role-based access
- **Three role-based workspaces**
  - **Doctor** — submit new authorization requests with clinical details and documents, track status, resubmit denied requests
  - **Nurse** — review requests and view patient details
  - **Insurance reviewer** — review the pending queue, see priority ranking, approve or deny requests
- **Request processing view** showing each step of the AI review
- **Result page** with the decision, policy evidence and explanation
- **Policy Intelligence Hub** to browse coverage policies
- **Priority Intelligence Hub** to rank pending cases by urgency
- **Analytics dashboards** for each role
- **Audit trail** and **notifications**
- **3D visuals** with React Three Fiber

## Tech Stack

| Area | Technology |
|---|---|
| Framework | React, Vite |
| Routing | React Router |
| 3D visuals | Three.js, React Three Fiber, Drei |
| Icons | Lucide React |
| Styling | CSS |
| Deployment | Nginx |

## Project Structure

```
src/
├── pages/        # Landing, Login, Queue, Processing, Result, Policies, Analytics, Audit Trail...
├── features/     # Role-specific pages (doctor, nurse, insurance)
├── components/   # Reusable UI (dashboard, layout, patient, policy, documents...)
├── router/       # App routes
├── guards/       # Protected and role-based routes
├── services/     # API calls to the backend
├── hooks/        # Custom React hooks
├── context/      # Global state (user role)
├── constants/    # Roles, permissions, request types
└── utils/        # Helper functions
```

## Getting Started

### Requirements
- Node.js 18 or newer
- The ProAuth IQ backend running (needed for login and data)

### Run locally

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

### Backend address

By default the app connects to `http://localhost:5001/api`.
To use a different backend, create a `.env` file:

```
VITE_API_BASE_URL=http://your-backend-url/api
```

### Build for production

```bash
npm run build
npm run preview
```

## My Role

I worked as the **Frontend Developer** on this project, building the user interface with React.
