<details>
<summary>Todo</summary>

```js
// fix bugs, auth & enable registering
```

</details>

<details>
<summary>New code</summary>

```js
// Color filtering svg via tailwind
// "brightness-200 contrast-200"

// textContent =>  Read target value when you cannot use target.value
// const value = target.closest("li")?.children[0].textContent as StatusType;
```

redux-ts

```js
// npm i --save-exact @types/react-redux react-redux redux redux-thunk
```

<details>
<summary>Handling responsive viewport</summary>

```js
const [viewport, setViewport] = useState(window.innerWidth);

const handleResize = () => {
	setViewport(window.innerWidth);
};

useEffect(() => {
	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
});
```

</details>

</details>
