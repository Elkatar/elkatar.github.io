
 
 
 

<div style='min-height: 650px;'>
               <div class='flex-container'>
                  <div class='flex-item-left'>
                     <h1 style='font-size: 50px;'>Inicie <b style='color:#F29F05;'>AGORA</b> a prática do Melhor Hobby do mundo!</h1>
                     <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper erat vitae ultrices sollicitudin. Nam malesuada, erat vitae interdum pharetra, arcu ante volutpat purus, vel ullamcorper nibh ante non ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse velit dolor, euismod at pulvinar eget, tempus eu nunc. Pellentesque vitae lobortis nisl, at facilisis nisi.</p>
                  </div>
                  <div class='flex-item-right'><img alt='rpg' src='https://1.bp.blogspot.com/-TYj5_4fbA4k/YNZnDVVBbII/AAAAAAAAIYw/8mj91UQT42McMCfFaH841NA4BnwmF2TCgCLcBGAsYHQ/s500/role-playing-game-2536016_1280.png' style='width: 100%; '/></div>
               </div>
            </div>
 
 
 
 
<div>
   <ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        <img src="{{ post.img }}" />
        <br>{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
  </div>
  
 
