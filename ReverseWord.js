function reverse(s)
{
  let str = [];
  let temp = "";
  for(let i = 0; i < s.length; i++)
  {
    if(s[i] == ' ')
    {
      str.push(temp);
      temp = "";        
    }
    else
    {
      temp = temp + s[i];
    }
   
  }
  str.push(temp);
   
  while(str.length != 0)
  {
    temp = str[str.length - 1];
    console.log(temp + " ");
    str.pop();
  }
}
 
let s = "My Name is Raju";
reverse(s); 