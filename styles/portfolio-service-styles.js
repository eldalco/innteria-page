import css from "styled-jsx/css"
export default css`

.container-grid {
  padding: 40px 0px 0px 0px;
  /* overflow: auto; */
  min-height: 100vh;
  /* overflow-x: hidden;
  overflow-y: hidden;
  height: 800vh; */
}
@media (min-width: 980px) {
  .container-grid::-webkit-scrollbar {
  width: 8px;
  }
}
@media (min-width: 980px) {
  .container-grid::-webkit-scrollbar-thumb {
  background-color: #1B3A4B;
  border-radius: 5px;
  }
}
`