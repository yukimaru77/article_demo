//目次と内容
field_of_study = ["Linux"];
field_of_study_en = ["Linux"]; //url用
main_theme = [["シェル","アクセス権"]];

add_template=document.createElement("div");
add_template.innerHTML=`<h1 class="title">ゆきまるの備忘録</h1>
<nav>
  <ul id="head">
    <li class="study">
      <a href="/article_demo/home.html"><span>まえがき</span></a>
    </li>
  </ul>
</nav>`;
document.getElementsByTagName("body")[0].prepend(add_template);

  for(i=0;i<field_of_study.length;i++)
  {
    add_node=document.createElement("li");
    add_node.className="study";
    add_node_s=document.createElement("span");
    add_node_s.textContent=field_of_study[i];
    add_node.prepend(add_node_s)
    for(j=0;j<main_theme[i].length;j++)
    {
      doc_num = j+6;
      add_child_node=document.createElement("div");
      add_child_node.className="theme";
      add_child_node_url=document.createElement("a");
      add_child_node_url.href="/article_demo/"+field_of_study_en[i]+"/"+field_of_study_en[i]+doc_num+".html";
      add_child_node_url.textContent=main_theme[i][j];
      add_child_node.append(add_child_node_url);
      add_node.append(add_child_node);
    }
    console.log(add_node);
    document.getElementById("head").append(add_node);
  }