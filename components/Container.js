export default function Container() {
  return (
    <>
      task : <input type="text"></input>
      <input type="button" value="save"></input>

      <ul>
        <li><input type="checkbox" checked /><del>task 1 </del><a href="#">delete</a></li>
        <li><input type="checkbox" />task 2 <a href="#">delete</a></li>
        <li><input type="checkbox" />task 3 <a href="#">delete</a></li>
      </ul>
    </>
  )
}
