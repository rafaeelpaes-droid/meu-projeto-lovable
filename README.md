:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  color: #e8edf7;
  background: #07131f;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(110, 130, 255, 0.18), transparent 30%),
    linear-gradient(180deg, #040b14 0%, #0b1220 100%);
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

input,
select,
textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.75);
  color: #eff6ff;
  padding: 0.9rem 1rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.app-shell {
  min-height: 100vh;
}

.welcome-screen,
.auth-screen,
.page-panel {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.welcome-screen {
  flex-direction: column;
  gap: 2rem;
}

.topbar {
  width: min(1200px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #ec4899);
  color: white;
  font-weight: 800;
}

.brand-mark.small {
  width: 36px;
  height: 36px;
}

.eyebrow {
  margin: 0;
  color: #9fb9d1;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-section {
  width: min(1200px, 100%);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.hero-copy h1 {
  margin: 1rem 0 1rem;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.02;
  max-width: 650px;
}

.hero-copy p {
  max-width: 600px;
  color: #cbd5e1;
  font-size: 1.08rem;
}

.pill {
  display: inline-flex;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.16);
  color: #bfdbfe;
  border: 1px solid rgba(147, 197, 253, 0.2);
  font-size: 0.82rem;
}

.cta-row {
  display: flex;
  gap: 1rem;
  margin-top: 1.6rem;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button,
.ghost-button,
.tab-button,
.link-button,
.tiny-button {
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button,
.secondary-button,
.ghost-button,
.tiny-button {
  padding: 0.9rem 1.3rem;
}

.primary-button {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  box-shadow: 0 14px 32px rgba(59, 130, 246, 0.35);
}

.secondary-button {
  background: rgba(148, 163, 184, 0.08);
  color: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.15);
}

.ghost-button {
  background: rgba(148, 163, 184, 0.06);
  color: white;
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.tab-button:hover,
.tiny-button:hover {
  transform: translateY(-1px);
}

.full {
  width: 100%;
}

.mini-stats {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.mini-stats div {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 1rem;
}

.mini-stats strong {
  font-size: 1.4rem;
}

.hero-preview {
  display: flex;
  justify-content: center;
}

.preview-card {
  width: min(100%, 420px);
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
  padding: 1.25rem;
  box-shadow: 0 30px 65px rgba(15, 23, 42, 0.5);
}

.tag-row {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  color: #dbeafe;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.profile-panel {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.avatar {
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: white;
  font-weight: 800;
}

.large-avatar,
.small-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.large-avatar {
  width: 70px;
  height: 70px;
  font-size: 1.25rem;
}

.small-avatar {
  width: 52px;
  height: 52px;
  font-size: 0.95rem;
}

.profile-panel h3 {
  margin: 0;
  font-size: 1.6rem;
}

.profile-panel p {
  margin: 0.25rem 0 0;
  color: #cbd5e1;
}

.balloons {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.8rem;
  margin-top: 1.8rem;
}

.balloon-item {
  display: grid;
  place-items: center;
  height: 72px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(180deg, rgba(96, 165, 250, 0.85), rgba(59, 130, 246, 0.5));
  border: 2px solid rgba(191, 219, 254, 0.5);
  box-shadow: inset -10px -12px 20px rgba(59, 130, 246, 0.3), 0 12px 24px rgba(59, 130, 246, 0.25);
  font-weight: 800;
}

.auth-card,
.panel,
.form-card {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 26px;
  box-shadow: 0 24px 60px rgba(2, 6, 23, 0.4);
}

.auth-card {
  width: min(100%, 560px);
  padding: 1.25rem;
}

.auth-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.auth-header h2 {
  margin: 0.2rem 0 0;
}

.auth-header p {
  margin: 0.2rem 0 0;
  color: #a8b8cc;
  font-size: 0.85rem;
}

.tab-group {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.tab-button {
  padding: 0.8rem 1rem;
  background: rgba(15, 23, 42, 0.7);
  color: #dbeafe;
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.tab-button.active {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2));
  border-color: rgba(147, 197, 253, 0.3);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.4rem;
}

.apply-gap {
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: #dfeaf7;
  font-size: 0.93rem;
}

.checkbox-row {
  flex-direction: row !important;
  align-items: center;
  gap: 0.7rem;
}

.checkbox-row input {
  width: 20px;
  height: 20px;
}

.signup-shell {
  margin-top: 1.2rem;
}

.signup-progress {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.4rem;
}

.progress-dot {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.2);
}

.progress-dot.active {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.verification-box {
  background: rgba(7, 17, 31, 0.7);
  border: 1px solid rgba(147, 197, 253, 0.2);
  border-radius: 16px;
  padding: 1rem;
}

.verification-box strong {
  display: block;
  margin-bottom: 0.6rem;
}

.verification-box p {
  margin: 0 0 0.8rem;
  color: #cbd5e1;
}

.verification-box ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #dbeafe;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}

.dashboard-shell {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  background: rgba(8, 15, 27, 0.9);
  border-right: 1px solid rgba(148, 163, 184, 0.12);
  padding: 1.5rem 1rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
}

.nav-item {
  background: transparent;
  color: #dbeafe;
  text-align: left;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px solid transparent;
}

.nav-item.active {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(147, 197, 253, 0.2);
}

.dashboard-main {
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.dashboard-header h2 {
  margin: 0.3rem 0 0;
  font-size: 2rem;
}

.status-box {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
}

.status-pill,
.tiny-pill,
.verified-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.72rem;
  padding: 0.35rem 0.65rem;
  font-weight: 700;
}

.status-pill.online,
.verified-badge,
.tiny-pill {
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(134, 239, 172, 0.18);
  color: #bbf7d0;
}

.status-pill.offline,
.tiny-pill.ghost {
  background: rgba(148, 163, 184, 0.09);
  border: 1px solid rgba(148, 163, 184, 0.12);
  color: #cbd5e1;
}

.tiny-pill.vip {
  background: rgba(251, 191, 36, 0.12);
  border: 1px solid rgba(251, 191, 36, 0.18);
  color: #fef3c7;
}

.top-grid,
.content-grid,
.stats-grid,
.price-grid,
.metrics-grid {
  display: grid;
  gap: 1.2rem;
}

.top-grid {
  grid-template-columns: 1.35fr 0.75fr;
}

.profile-card,
.actions-card,
.panel,
.stat-card {
  padding: 1.25rem;
}

.profile-card {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.user-avatar {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  font-weight: 800;
  font-size: 1.4rem;
}

.row-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
}

.profile-card h3 {
  margin: 0;
}

.profile-card p {
  margin: 0.28rem 0 0;
  color: #cbd5e1;
}

.actions-card {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.mini-state {
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  display: flex;
  justify-content: space-between;
  color: #dbeafe;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 1.25rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.stat-card span {
  color: #a8b8cc;
}

.stat-card strong {
  font-size: 1.8rem;
}

.stat-card small {
  color: #cbd5e1;
}

.content-grid {
  grid-template-columns: 1.15fr 0.85fr;
  margin-top: 1.25rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-header h3,
.section-header h2 {
  margin: 0;
}

.link-button {
  background: transparent;
  color: #bfdbfe;
  padding: 0;
}

.room-card {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.room-card h4 {
  margin: 0.3rem 0 1rem;
}

.compact-row {
  margin-bottom: 1rem;
  color: #d9e7f8;
}

.stack-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.stack-item {
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(9, 17, 29, 0.72);
  padding: 0.85rem 1rem;
}

.stack-item strong {
  display: block;
  margin-bottom: 0.2rem;
}

.stack-item p,
.stack-item span {
  margin: 0;
  color: #cbd5e1;
  font-size: 0.88rem;
}

.matches-panel {
  margin-top: 1.25rem;
}

.match-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.match-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  background: rgba(12, 17, 29, 0.72);
}

.match-card strong,
.match-card p {
  display: block;
  margin: 0;
}

.match-card p {
  color: #b7c5d5;
}

.form-card {
  width: min(100%, 850px);
  padding: 1.5rem;
}

.form-grid,
.metrics-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.form-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.summary-box {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(110, 130, 255, 0.08);
  border: 1px solid rgba(147, 197, 253, 0.18);
}

.summary-box strong {
  display: block;
  margin-bottom: 0.35rem;
}

.summary-box p {
  margin: 0;
  color: #dbeafe;
}

.room-panel {
  flex-direction: column;
  gap: 1rem;
}

.live-header {
  width: min(100%, 980px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.4rem;
}

.live-header h2 {
  margin: 0.4rem 0 0;
}

.live-meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  color: #dbeafe;
}

.participants-grid {
  width: min(100%, 980px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.participant-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: space-between;
}

.participant-card strong,
.participant-card p {
  margin: 0;
}

.participant-card p {
  color: #cbd5e1;
}

.row-end {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
}

.question-box {
  width: min(100%, 980px);
  padding: 1.25rem 1.4rem;
}

.question-box h3 {
  margin: 0.3rem 0 1rem;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}

.question-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.chat-card {
  width: min(100%, 760px);
  padding: 1.25rem;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.chat-header h2 {
  margin: 0.4rem 0 0;
}

.message-list {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.message {
  max-width: 70%;
  padding: 0.9rem 1rem;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.message strong {
  display: block;
  margin-bottom: 0.25rem;
}

.message p {
  margin: 0;
}

.message.inbound {
  background: rgba(15, 23, 42, 0.72);
}

.message.outbound {
  margin-left: auto;
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(147, 197, 253, 0.15);
}

.chat-input-row {
  display: flex;
  gap: 0.7rem;
  margin-top: 1.2rem;
}

.pricing-card {
  width: min(100%, 880px);
  padding: 1.5rem;
}

.price-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 1.2rem;
}

.price-box {
  padding: 1.2rem;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(15, 23, 42, 0.72);
  color: #e2e8f0;
  cursor: pointer;
}

.price-box.selected {
  border-color: rgba(147, 197, 253, 0.24);
  background: rgba(59, 130, 246, 0.08);
}

.vip-box.selected {
  background: rgba(168, 85, 247, 0.08);
  border-color: rgba(216, 180, 254, 0.2);
}

.price { font-size: 2rem; margin: 0.5rem 0; font-weight: 800; }

.price-box ul {
  padding-left: 1.1rem;
  margin: 1rem 0 0;
  color: #dbeafe;
}

.admin-shell {
  align-items: flex-start;
}

.metrics-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 1rem;
}

.metric-box {
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 1rem;
}

.metric-box span {
  display: block;
  color: #9fb9d1;
}

.metric-box strong {
  display: block;
  margin-top: 0.4rem;
  font-size: 1.8rem;
}

.admin-table-wrap {
  margin-top: 1.5rem;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(15, 23, 42, 0.75);
  border-radius: 18px;
  overflow: hidden;
}

th,
td {
  padding: 0.9rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
}

th {
  color: #9fb9d1;
  font-weight: 700;
}

.tiny-button {
  padding: 0.55rem 0.75rem;
  background: rgba(248, 113, 113, 0.12);
  color: #fecaca;
  border: 1px solid rgba(248, 113, 113, 0.2);
}

@media (max-width: 980px) {
  .hero-section,
  .top-grid,
  .content-grid,
  .stats-grid,
  .form-grid,
  .participants-grid,
  .match-grid,
  .metrics-grid,
  .price-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .welcome-screen,
  .auth-screen,
  .page-panel,
  .dashboard-main {
    padding: 1rem;
  }

  .topbar,
  .dashboard-header,
  .section-header,
  .chat-header,
  .live-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-row,
  .nav-bar,
  .chat-input-row,
  .question-actions,
  .status-box {
    flex-direction: column;
  }

  .message {
    max-width: 100%;
  }
}
