# react-form-parent-child
React Project for Parent component to control Children Form

## There are 6 solutions to check out.

1. By using useRef
2. By using Custom Hook, e.g. useValidation -> Not available.
   Instead of it, use react-hook-form
3. By using props (Normal Way)
4. By using HOC e.g. withValidation -> Not available.
   In order to use HOC, it needs useRef
5. By using Redux
6. By using Context

## The workflow is simulated by the following.
    There are two components, parent & children. 
    Children has Form (state, validation, submit).
    Parent wants to access, update, call the children.
