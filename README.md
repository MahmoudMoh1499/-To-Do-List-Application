h1. Redmine Update: Todo List Application Enhancements

h2. How to Run the Application:

1. *Clone the Repository*:
   - If you haven't already, clone the repository to your local machine using the following command:
     ```
     git clone <repository_url>
     ```
   
2. *Install Dependencies*:
   - Navigate to the project directory and install the necessary dependencies:
     ```
     cd <project_directory>
     npm install
     ```

3. *Run the Application*:
   - Start the development server using the following command:
     ```
     npm start
     ```
   - The application should now be running locally at [http://localhost:3000](http://localhost:3000).

4. *Open in Browser*:
   - Open your browser and navigate to the following URL:
     [http://localhost:3000](http://localhost:3000)
   - You should now see the Todo List application running.

h2. New Features Added:

1. *Filtering Todos by Status*:
   - **Feature**: Users can now filter todos by their status: All, Completed, or Pending.
   - **How It Works**: A filter component was added, allowing users to toggle between different todo views.
   - **Where to Find It**: The filter options are located at the top of the Todo list.

2. *Types Refactoring*:
   - **Feature**: Moved `TodoFilterProps` interface and `Filter` type to a separate `types.ts` file.
   - **Benefit**: Improved code organization and readability.
   - **Where to Find It**: Check `types.ts` for type definitions.

3. *ID Generation for Todos*:
   - **Feature**: The new todos are now assigned unique random IDs using `Math.random()`.
   - **How It Works**: The random IDs ensure that todos have unique identifiers.
   - **Benefit**: Avoids ID collisions in the list.

4. *Local Storage Persistence* (Optional):
   - **Feature**: Todo list state is now persisted in local storage, so data will remain intact across page reloads.
   - **How It Works**: Todos are saved to local storage when changed (added, deleted, or modified).
   - **Benefit**: Prevents data loss on page reloads.
   
5. *Code Quality Enhancements*:
   - **Refactoring**: Components and types were split into separate files for improved maintainability.
   - **Where to Find It**: Key components (`TodoApp.tsx`, `TodoFilter.tsx`, `TodoList.tsx`, and `types.ts`) have been updated to follow modular best practices.

h2. Demo:
You can check out the live demo of the Todo List application [here](<https://youtu.be/1p7Spwq0InAs>).

h2. Technical Details:

- *Technologies Used*:
  - React (TypeScript)
  - Bootstrap for styling
  - Local Storage for persistence (optional)
  
- *Project Structure*:
  - `src/`: Contains all the source code.
  - `src/components/`: Contains React components like `TodoApp.tsx`, `TodoList.tsx`, `TodoForm.tsx`, and `TodoFilter.tsx`.
  - `src/types.ts`: Contains the types (`Todo`, `TodoFilterProps`, and `Filter`).
  
- *Key Components*:
  - `TodoApp.tsx`: Main component that handles the todo list logic.
  - `TodoList.tsx`: Renders the list of todos.
  - `TodoForm.tsx`: Form for adding new todos.
  - `TodoFilter.tsx`: Filter component for switching between All, Completed, and Pending todos.
