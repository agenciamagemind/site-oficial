(() => {
  'use strict';
  const playlistId = 'PLfnBLh_pFxgg';
  // Verified snapshot is a fallback only. The player retrieves the owner's order on every visit.
  const snapshot = [
  {
    "id": "F1CN0KoTriw",
    "poster": "assets/optimized/video-posters/video-01.webp"
  },
  {
    "id": "FlUG2V2Yis8",
    "poster": "assets/optimized/video-posters/video-02.webp"
  },
  {
    "id": "o7Fzsias8Ic",
    "poster": "assets/optimized/video-posters/video-03.webp"
  },
  {
    "id": "XiWLHNvLXqM",
    "poster": "assets/optimized/video-posters/video-04.webp"
  },
  {
    "id": "JDwccLvRS8M",
    "poster": "assets/optimized/video-posters/video-05.webp"
  },
  {
    "id": "4o0l-d1j4Fk",
    "poster": "assets/optimized/video-posters/video-06.webp"
  },
  {
    "id": "_20MazadSYk",
    "poster": "assets/optimized/video-posters/video-07.webp"
  },
  {
    "id": "M4UtRWOGLLw",
    "poster": "assets/optimized/video-posters/video-08.webp"
  },
  {
    "id": "v9qPgv9mWSc",
    "poster": "assets/optimized/video-posters/video-09.webp"
  },
  {
    "id": "h2M4ho_Chv0",
    "poster": "assets/optimized/video-posters/video-10.webp"
  },
  {
    "id": "BCNdT0W5Lbo",
    "poster": "assets/optimized/video-posters/video-11.webp"
  },
  {
    "id": "gYwt1nZ20g8",
    "poster": "assets/optimized/video-posters/video-12.webp"
  },
  {
    "id": "X27EyRSKSgA",
    "poster": "assets/optimized/video-posters/video-13.webp"
  },
  {
    "id": "Wg60xJhl9k4",
    "poster": "assets/optimized/video-posters/video-14.webp"
  },
  {
    "id": "8KmuIfwi3xM",
    "poster": "assets/optimized/video-posters/video-15.webp"
  },
  {
    "id": "z-JwIUIXEDM",
    "poster": "assets/optimized/video-posters/video-16.webp"
  },
  {
    "id": "VvluneLUFeo",
    "poster": "assets/optimized/video-posters/video-17.webp"
  },
  {
    "id": "k_wyT7dwC-I",
    "poster": "assets/optimized/video-posters/video-18.webp"
  },
  {
    "id": "lZIytYw6ZOg",
    "poster": "assets/optimized/video-posters/video-19.webp"
  },
  {
    "id": "iC2tT6BdrgM",
    "poster": "assets/optimized/video-posters/video-20.webp"
  },
  {
    "id": "5hOARR_gKOI",
    "poster": "assets/optimized/video-posters/video-28.webp"
  },
  {
    "id": "9BEFyO_OeHY",
    "poster": "assets/optimized/video-posters/video-25.webp"
  },
  {
    "id": "CAfFOSGB3LE",
    "poster": "assets/optimized/video-posters/video-23.webp"
  },
  {
    "id": "KlwlMYTSzvE",
    "poster": "assets/optimized/video-posters/video-29.webp"
  },
  {
    "id": "MO2rnZBPMA8",
    "poster": "assets/optimized/video-posters/video-26.webp"
  },
  {
    "id": "ZKi6S8-jRXQ",
    "poster": "assets/optimized/video-posters/video-24.webp"
  },
  {
    "id": "fopvben_F6k",
    "poster": "assets/optimized/video-posters/video-22.webp"
  },
  {
    "id": "mufIt3K5-wQ",
    "poster": "assets/optimized/video-posters/video-30.webp"
  },
  {
    "id": "wwijPovVa1M",
    "poster": "assets/optimized/video-posters/video-27.webp"
  },
  {
    "id": "yZyrUky38zw",
    "poster": "assets/optimized/video-posters/video-21.webp"
  },
  {
    "id": "6ZDNwD2AzqE",
    "poster": "assets/optimized/video-posters/video-34.webp"
  },
  {
    "id": "Q2ZPDMVkGAs",
    "poster": "assets/optimized/video-posters/video-35.webp"
  },
  {
    "id": "WQfxmfFGhi0",
    "poster": "assets/optimized/video-posters/video-37.webp"
  },
  {
    "id": "Xc6wFbUVfGU",
    "poster": "assets/optimized/video-posters/video-36.webp"
  },
  {
    "id": "jDzzmfV2_ts",
    "poster": "assets/optimized/video-posters/video-33.webp"
  },
  {
    "id": "nQqo1m5IlOU",
    "poster": "assets/optimized/video-posters/video-32.webp"
  },
  {
    "id": "sAGMNFBk56c",
    "poster": "assets/optimized/video-posters/video-31.webp"
  }
];
  const posterById = new Map(snapshot.map(item => [item.id,item.poster]));
  const media = {
    video:snapshot.map(item => item.id),
    image:Array.from({length:48},(_,i) => `assets/portfolio/image-${String(i+1).padStart(2,'0')}.png`)
  };
  const stage = document.getElementById('portfolioStage');
  const track = document.getElementById('portfolioTrack');
  const status = document.getElementById('portfolioStatus');
  if (!stage || !track) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wrap = (i,total) => (i % total + total) % total;
  let mode = 'video', index = 0, focused = 0, slides = [], metrics = [], step = 1, translate = 0;
  let warm = false, visible = false, pausedByUser = false, audioUnlocked = false;
  let player = null, apiLoading = false, ready = false, playlistResolved = false, currentVideo = '', frameReady = false;
  let normalizeTimer = 0, playlistTimer = 0, playlistAttempts = 0, dragFrame = 0, wheelTimer = 0;
  let dragging = false, axis = '', startX = 0, startY = 0, base = 0, pressed = null;
  let lastX = 0, lastTime = 0, velocity = 0, pendingTranslate = 0;
  const host = document.createElement('div');
  host.className = 'portfolio-player-host';
  const mount = document.createElement('div');
  mount.id = 'portfolioYoutubePlayer';
  host.appendChild(mount);
  const toggle = document.createElement('button');
  toggle.className = 'portfolio-video-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label','Pausar vídeo');
  host.appendChild(toggle);
  stage.appendChild(host);
  const poster = i => {
    const id = media.video[i];
    return posterById.get(id) || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  };
  const imageCache = new Map();
  function preload(src) {
    if (imageCache.has(src)) return;
    const image = new Image();
    image.decoding = 'async';
    image.src = src;
    imageCache.set(src,image);
    // Keep only the neighbouring previews in memory.
    if (imageCache.size > 18) imageCache.delete(imageCache.keys().next().value);
  }
  function warmPreviews() {
    const items = media[mode];
    for (let n = -3; n <= 3; n++) {
      const real = wrap(index+n,items.length);
      preload(mode === 'video' ? poster(real) : items[real]);
    }
  }
  function setStatus(message = '') {
    status.textContent = message;
    status.hidden = !message;
  }
  function syncHost() {
    stage.dataset.playbackIntent = pausedByUser ? 'paused' : 'playing';
    stage.dataset.videoId = currentVideo;
    const slide = slides[focused];
    if (slide) {
      host.style.top = `${parseFloat(getComputedStyle(stage).paddingTop) + slide.offsetTop}px`;
      host.style.width = `${slide.offsetWidth}px`;
      host.style.height = `${slide.offsetHeight}px`;
    }
    const show = mode === 'video' && visible && frameReady && !dragging && !normalizeTimer;
    host.classList.toggle('is-visible',show);
    host.classList.toggle('is-paused',pausedByUser);
    toggle.setAttribute('aria-label',pausedByUser ? 'Reproduzir vídeo' : 'Pausar vídeo');
    slides.forEach((item,i) => item.classList.toggle('is-paused',mode === 'video' && i === focused && pausedByUser));
  }
  function pause() {
    if (ready) player.pauseVideo();
  }
  function suspend() {
    pause();
    host.classList.remove('is-visible');
  }
  function markAwaitingPlay() {
    host.classList.add('is-awaiting-play');
    slides[focused]?.classList.add('is-awaiting-play');
    toggle.setAttribute('aria-label','Reproduzir vídeo');
  }
  function play() {
    if (mode !== 'video' || !ready || !playlistResolved || !visible || document.hidden || dragging || normalizeTimer || pausedByUser) return;
    const id = media.video[index];
    if (currentVideo !== id) {
      currentVideo = id;
      frameReady = false;
      host.classList.remove('is-visible','is-awaiting-play');
      slides.forEach(slide => slide.classList.remove('is-awaiting-play'));
      player.setVolume(85);
      if (audioUnlocked) player.unMute(); else player.mute();
      player.loadVideoById({videoId:id,startSeconds:0});
    } else {
      if (audioUnlocked) player.unMute(); else player.mute();
      player.playVideo();
    }
    syncHost();
  }
  function resolvePlaylist() {
    if (!ready || playlistResolved) return;
    const ids = player.getPlaylist();
    if (Array.isArray(ids) && ids.length) {
      const ordered = ids.filter(id => /^[a-zA-Z0-9_-]{11}$/.test(id));
      if (ordered.length) {
        media.video = ordered;
        stage.dataset.playlistSource = 'youtube';
        stage.dataset.playlistCount = String(ordered.length);
        index = 0;
        playlistResolved = true;
        clearTimeout(playlistTimer);
        build();
        return;
      }
    }
    if (++playlistAttempts < 60) playlistTimer = setTimeout(resolvePlaylist,200);
    else {
      playlistResolved = true;
      stage.dataset.playlistSource = 'snapshot';
      stage.dataset.playlistCount = String(media.video.length);
      build();
    }
  }
  function createPlayer() {
    if (player || !warm) return;
    player = new YT.Player(mount.id,{
      host:'https://www.youtube.com',
      width:'100%',height:'100%',
      playerVars:{controls:0,playsinline:1,fs:0,disablekb:1,iv_load_policy:3,cc_load_policy:0,rel:0,hl:'pt-BR',origin:location.origin},
      events:{
        onReady:event => {
          ready = true;
          event.target.getIframe().setAttribute('title','Portfólio Magemind no YouTube');
          event.target.getIframe().setAttribute('allow','autoplay; encrypted-media; picture-in-picture; fullscreen');
          event.target.getIframe().setAttribute('referrerpolicy','strict-origin-when-cross-origin');
          event.target.cuePlaylist({listType:'playlist',list:playlistId,index:0,startSeconds:0});
          resolvePlaylist();
        },
        onStateChange:event => {
          stage.dataset.playerState = String(event.data);
          if (!playlistResolved) { resolvePlaylist(); return; }
          if (event.data === YT.PlayerState.PLAYING) {
            // Late messages from a previous selection must not reveal that video.
            if (player.getVideoData().video_id !== media.video[index]) return;
            if (!visible || document.hidden || mode !== 'video' || dragging || normalizeTimer || pausedByUser) { pause(); return; }
            frameReady = true;
            host.classList.remove('is-awaiting-play');
            slides.forEach(slide => slide.classList.remove('is-awaiting-play'));
            setStatus();
            syncHost();
          } else if (event.data === YT.PlayerState.ENDED && mode === 'video' && player.getVideoData().video_id === media.video[index]) {
            frameReady = false;
            move(1);
          } else if (event.data === YT.PlayerState.PAUSED) syncHost();
        },
        onAutoplayBlocked:markAwaitingPlay,
        onError:() => {
          frameReady = false;
          syncHost();
          markAwaitingPlay();
          setStatus('Não foi possível reproduzir este vídeo aqui. Você pode assistir pelo botão do YouTube abaixo.');
        }
      }
    });
  }
  function ensurePlayer() {
    if (window.YT?.Player) { createPlayer(); return; }
    if (apiLoading) return;
    apiLoading = true;
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { previous?.(); createPlayer(); };
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    script.onerror = () => {
      apiLoading = false;
      setStatus('O player não carregou. Assista ao portfólio pelo botão do YouTube abaixo.');
    };
    document.head.appendChild(script);
  }
  function measure() {
    metrics = slides.map(slide => slide.offsetLeft + slide.offsetWidth/2);
    step = metrics.length > 1 ? metrics[1]-metrics[0] : (slides[0]?.offsetWidth || 1);
  }
  function target(i) { return stage.clientWidth/2 - metrics[i]; }
  function depth(value) {
    const center = stage.clientWidth/2;
    let nearest = focused, best = Infinity;
    metrics.forEach((x,i) => { if (Math.abs(x+value-center) < best) {best=Math.abs(x+value-center);nearest=i;} });
    slides.forEach((slide,i) => {
      const d = Math.min(Math.abs(metrics[i]+value-center)/step,3);
      slide.style.setProperty('--slide-scale',String(Math.max(.68,1-d*.14)));
      slide.style.setProperty('--slide-opacity',String(Math.max(.1,1-d*.36)));
      slide.style.setProperty('--slide-gray',String(Math.min(1,d*.9)));
      slide.style.setProperty('--slide-brightness',String(Math.max(.3,1-d*.27)));
      slide.style.setProperty('--slide-blur',`${Math.max(0,(d-.72)*.8)}px`);
      slide.style.setProperty('--slide-y',`${Math.min(24,d*12)}px`);
      slide.classList.toggle('is-active',i === nearest);
      slide.setAttribute('aria-current',String(i === focused));
      slide.tabIndex = i === focused ? 0 : -1;
    });
  }
  function setTranslate(value,animate = false) {
    translate = value;
    track.style.transition = animate && !reduceMotion ? 'transform .4s cubic-bezier(.2,.72,.2,1)' : 'none';
    track.style.transform = `translate3d(${value}px,0,0)`;
    depth(value);
  }
  function scheduleTranslate(value) {
    pendingTranslate = value;
    if (dragFrame) return;
    dragFrame = requestAnimationFrame(() => {dragFrame=0;setTranslate(pendingTranslate);});
  }
  function build() {
    clearTimeout(normalizeTimer);
    normalizeTimer = 0;
    const items = media[mode], radius = Math.min(innerWidth <= 760 ? 2 : 3,Math.floor(items.length/2));
    const reusable = new Map(slides.map(slide => [slide.dataset.key,slide]));
    slides = [];
    for (let n=-radius; n<=radius; n++) {
      const real = wrap(index+n,items.length), key = `${mode}:${items[real]}`;
      let slide = reusable.get(key);
      if (slide) reusable.delete(key);
      else {
        slide = document.createElement('button');
        slide.className = 'portfolio-slide';
        slide.type = 'button';
        const image = new Image();
        image.alt = mode === 'image' ? 'Criativo publicitário produzido pela Magemind' : 'Prévia do criativo em vídeo produzido pela Magemind';
        image.decoding = 'async';
        image.draggable = false;
        image.src = mode === 'image' ? items[real] : poster(real);
        slide.appendChild(image);
        if (mode === 'video') {
          const indicator = document.createElement('span');
          indicator.className = 'portfolio-pause-indicator';
          indicator.setAttribute('aria-hidden','true');
          slide.appendChild(indicator);
        }
        slide.addEventListener('click',event => {
          if (event.detail === 0) select(slides.indexOf(slide));
        });
      }
      slide.dataset.key = key;
      slide.dataset.realIndex = String(real);
      slide.setAttribute('aria-label',`Selecionar criativo ${real+1}`);
      slides.push(slide);
    }
    track.replaceChildren(...slides);
    focused = radius;
    stage.classList.toggle('is-video-mode',mode === 'video');
    stage.classList.toggle('is-image-mode',mode === 'image');
    measure();
    setTranslate(target(focused));
    warmPreviews();
    syncHost();
    if (warm && mode === 'video') ensurePlayer();
    play();
  }
  function settle(i,animate = true) {
    if (!slides[i]) return;
    clearTimeout(normalizeTimer);
    normalizeTimer = 0;
    const changed = i !== focused;
    focused = i;
    index = Number(slides[i].dataset.realIndex);
    stage.classList.remove('is-dragging');
    if (changed) { pausedByUser=false;frameReady=false;suspend();setStatus(); }
    setTranslate(target(i),animate);
    if (i !== Math.floor(slides.length/2)) {
      normalizeTimer = setTimeout(build,animate && !reduceMotion ? 420 : 0);
    } else { syncHost();play(); }
  }
  function move(direction) {
    if (normalizeTimer) build();
    settle(focused+direction);
  }
  function togglePlayback() {
    audioUnlocked = true;
    if (!ready) {ensurePlayer();return;}
    if (pausedByUser || host.classList.contains('is-awaiting-play') || !frameReady) {
      pausedByUser = false;
      host.classList.remove('is-awaiting-play');
      slides[focused]?.classList.remove('is-awaiting-play');
      play();
    } else {pausedByUser=true;pause();}
    syncHost();
  }
  function select(i) {
    if (i < 0) return;
    if (i !== focused) {settle(i);return;}
    if (mode === 'image') {
      modalImage.src = media.image[index];
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else togglePlayback();
  }
  // Pointer gestures, including those starting on the icon, are resolved by the stage.
  // Keyboard activation has no pointerup, so it is handled by the button itself.
  toggle.addEventListener('click',event => {event.stopPropagation();if(event.detail===0)togglePlayback();});
  function unlockAudio() {
    audioUnlocked = true;
    if (ready) {player.unMute();player.setVolume(85);}
  }
  document.addEventListener('pointerdown',unlockAudio,{once:true,capture:true});
  document.addEventListener('keydown',unlockAudio,{once:true,capture:true});
  stage.addEventListener('pointerdown',event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (normalizeTimer) build();
    dragging = true;axis='pending';startX=lastX=event.clientX;startY=event.clientY;base=translate;velocity=0;lastTime=performance.now();
    const slide=event.target.closest('.portfolio-slide');
    pressed=slide ? slides.indexOf(slide) : (event.target.closest('.portfolio-player-host') ? focused : null);
  });
  stage.addEventListener('pointermove',event => {
    if (!dragging) return;
    const dx=event.clientX-startX,dy=event.clientY-startY;
    if (axis === 'pending') {
      if (Math.abs(dy)>9 && Math.abs(dy)>Math.abs(dx)*1.15) {dragging=false;pressed=null;return;}
      if (Math.abs(dx)>9 && Math.abs(dx)>Math.abs(dy)*1.15) {
        axis='horizontal';stage.classList.add('is-dragging');stage.setPointerCapture(event.pointerId);suspend();
      }
    }
    if (axis !== 'horizontal') return;
    const now=performance.now();
    velocity=(event.clientX-lastX)/Math.max(1,now-lastTime);
    lastX=event.clientX;lastTime=now;
    scheduleTranslate(Math.max(target(slides.length-1)-step*.25,Math.min(target(0)+step*.25,base+dx)));
  });
  function finish(event) {
    if (!dragging) return;
    dragging=false;
    if (dragFrame) {cancelAnimationFrame(dragFrame);dragFrame=0;setTranslate(pendingTranslate);}
    const dx=event.clientX-startX,dy=event.clientY-startY;
    const tap=axis==='pending' && Math.abs(dx)<=9 && Math.abs(dy)<=9 && event.type!=='pointercancel';
    if (tap && pressed!==null) select(pressed);
    else if (axis==='horizontal' && event.type!=='pointercancel') {
      const recent=performance.now()-lastTime < 100 ? Math.max(-1.2,Math.min(1.2,velocity))*120 : 0;
      const projected=translate+recent;
      let nearest=focused;
      metrics.forEach((x,i)=>{if(Math.abs(x+projected-stage.clientWidth/2)<Math.abs(metrics[nearest]+projected-stage.clientWidth/2))nearest=i;});
      if(nearest===focused && Math.abs(dx)>42)nearest+=dx<0?1:-1;
      settle(Math.max(0,Math.min(slides.length-1,nearest)));
    } else {setTranslate(target(focused));syncHost();play();}
    axis='';pressed=null;stage.classList.remove('is-dragging');
    if(stage.hasPointerCapture(event.pointerId))stage.releasePointerCapture(event.pointerId);
  }
  window.addEventListener('pointerup',finish);
  window.addEventListener('pointercancel',finish);
  stage.addEventListener('keydown',event => {
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}
  });
  stage.addEventListener('wheel',event => {
    if (Math.abs(event.deltaX)<=Math.abs(event.deltaY) || Math.abs(event.deltaX)<1) return;
    event.preventDefault();
    if(normalizeTimer)build();
    dragging=true;stage.classList.add('is-dragging');suspend();
    scheduleTranslate(Math.max(target(slides.length-1),Math.min(target(0),translate-event.deltaX)));
    clearTimeout(wheelTimer);
    wheelTimer=setTimeout(()=>{
      dragging=false;stage.classList.remove('is-dragging');
      let nearest=focused;
      metrics.forEach((x,i)=>{if(Math.abs(x+translate-stage.clientWidth/2)<Math.abs(metrics[nearest]+translate-stage.clientWidth/2))nearest=i;});
      settle(nearest);
    },120);
  },{passive:false});
  document.querySelectorAll('.media-switch button').forEach(button => button.addEventListener('click',()=>{
    if(mode===button.dataset.mode)return;
    suspend();mode=button.dataset.mode;index=0;pausedByUser=false;frameReady=false;currentVideo='';
    setStatus();
    document.querySelectorAll('.media-switch button').forEach(other=>{
      other.classList.toggle('active',other===button);other.setAttribute('aria-selected',String(other===button));
    });
    build();
  }));
  const modal=document.getElementById('mediaModal'),modalImage=document.getElementById('modalImage');
  const closeModal=()=>{modal.classList.remove('open');modalImage.removeAttribute('src');document.body.style.overflow='';};
  modal.querySelector('.modal-close').addEventListener('click',closeModal);
  modal.addEventListener('click',event=>{if(event.target===modal)closeModal();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal();});
  const section=document.getElementById('portfolio');
  new IntersectionObserver(entries=>{
    warm=entries[0].isIntersecting;
    if(warm && mode==='video')ensurePlayer();
  },{rootMargin:'500px 0px'}).observe(section);
  // Measure the media area, rather than the tall section heading, for autoplay.
  new IntersectionObserver(entries=>{
    visible=entries[0].isIntersecting;
    if(visible)play();else suspend();
    syncHost();
  },{threshold:.35}).observe(stage);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)suspend();else{syncHost();play();}});
  const resize=()=>{
    if(dragging)return;
    const expected=Math.min(innerWidth<=760?2:3,Math.floor(media[mode].length/2))*2+1;
    if(slides.length!==expected)build();else{measure();setTranslate(target(focused));syncHost();}
  };
  if('ResizeObserver'in window)new ResizeObserver(resize).observe(stage);
  else window.addEventListener('resize',resize);
  build();
})();
