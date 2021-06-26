# DivaroBoard

# How to start the application?

## Back-end

I. Go to the `backend/` directory
II. Install dependencies `yarn` or `npm install`
III. Make a `.env` file `cp .env-sample .env`
IV. Start the server `yarn start` or `npm start`
V. Go to `http://localhost:3005`

## Front-end

I. Go to the `frontend/` directory
II. Install dependencies `yarn` or `npm install`
III. Start the application by running `yarn start` or `npm start`
IV. Go to `http://localhost:3000`

# Check-list

- Task (ticket) has the following fields: `title`, `description`, `publishDate`, `assignee`. Check `frontend/src/redux/ticket/types.ts` `ITicket` interface.
- Ticket can be manimulated by user: <br>
__inside the application__:
I. Create ticket by clicking 'Create new task' in the header menu.
II. Read ticket by reloading the page.
III. Update ticket by clicking on ticket, then clicking `Save` button
IV. Delete ticket by clicking on ticket, then clicking in `Delete` button 

- 3 columns: Open, In Progress, Published - are the columns shown by default.
- A clear color distinction between the columns is achieved by having the `color` field in `status` entity.
- Each column can display 0..n - can be checked by creating lots of tickets.

- The user can hide/unhide specific fields within a card: <br>
__inside the application__:<br>
I. Click `Set filters` button in the header menu.<br>
II. Set the fields you want to see/hide.<br>
**Important!** User is restricted from hiding `title`, since it opens an ability to leave the ticket information-empty. <br>

- The user can create new columns: <br>
__inside the application__:<br>
I. Click the `+ Create new column` button<br>
II. Input new column title in the input field.<br>
III. Click `Save` button.<br>
<br>
Now try editing a task: 'status' field will be populated with the new column option.

**Important!**
To horizontally scroll the board, use the `mouse-drag` feature: press left button mouse and drag the board.<br>
New columns can be deleted by clicking on the red trash icon. All related tasks will be moved to `open`.


# Used technologies

## Back-end

- express
- body-parser
- cors
- helmet
- dotenv

## Front-end

- React (CRA)
- Typescript
- TailWind CSS
- Redux & Redux-Saga
- reselect
- react-router-dom
- moment-mini
- react-indiana-drag-scroll
- react-modal

