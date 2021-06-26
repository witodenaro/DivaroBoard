# DivaroBoard

# How to start the application?

## Back-end

1. Go to the `backend/` directory
2. Install dependencies `yarn` or `npm install`
3. Make a `.env` file `cp .env-sample .env`
4. Start the server `yarn start` or `npm start`
5. Go to `http://localhost:3005`

## Front-end

1. Go to the `frontend/` directory
2. Install dependencies `yarn` or `npm install`
3. Start the application by running `yarn start` or `npm start`
4. Go to `http://localhost:3000`

# Check-list

- [x] Task (ticket) has the following fields: `title`, `description`, `publishDate`, `assignee`. 
<br>Check `frontend/src/redux/ticket/types.ts` `ITicket` interface.
- [x] Ticket can be manipulated by the user: <br>
__inside the application__:
1. Create ticket by clicking 'Create new task' in the header menu.
2. Read ticket by reloading the page.
3. Update ticket by clicking on ticket, then clicking `Save` button
4. Delete ticket by clicking on ticket, then clicking in `Delete` button 
- [x] columns: Open, In Progress, Published - are the columns shown by default.
- [x] clear color distinction between the columns is achieved by having the `color` field in `status` entity.
- [x] Each column can display 0..n - can be checked by creating lots of tickets.
- [x] The user can hide/unhide specific fields within a card: <br>
__inside the application__:<br>
1. Click `Set filters` button in the header menu.<br>
2. Set the fields you want to see/hide.<br>
**Important!** User is restricted from hiding `title`, since it opens an ability to leave the ticket information-empty. <br>

- [x] The user can create new columns: <br>
__inside the application__:<br>
1. Click the `+ Create new column` button<br>
2. Input new column title in the input field.<br>
3. Click `Save` button.<br>
Now try editing a task: 'status' field will be populated with the new column option.

**Important!**
To scroll the board horizontally, use the `mouse-drag` feature: press left button mouse and drag the board.<br>
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

