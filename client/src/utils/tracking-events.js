import { v4 as uuidv4 } from "uuid";

const userId = uuidv4();//I just rended a rendom uuid, Uassly will get a set user id or any other identify

const saveEvent = (data) => {
  data.userId = userId;
  data.timestamp = new Date().toISOString();

  fetch('http://localhost:8080/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
};

const trackPageLoad = () => {
  const event = {
    type: 'pageLoad',
    details: {
      pathName: window.location.pathname
    }
  };
  saveEvent(event);
};

const trackAdSlotView = (adType) => {
  const event = {
    type: 'adSlotView',
    details: {
      adType: adType
    }
  };
  saveEvent(event);
};

const trackAdClick = (adType) => {
  const event = {
    type: 'adClick',
    details: {
      adType: adType
    }
  };
  saveEvent(event);
};

const trackAdClosed = (adType) => {
  const event = {
    type: 'closeAd',
    details: {
      adType
    }
  };
  saveEvent(event);
};

const trackTimeSpentOnPage = (pageName, time) => {
  const event = {
    type: 'timeSpentOnPage',
    details: {
      pageName,
      time
    }
  };
  saveEvent(event);
};

const trackTimeSpentOnWebsite = (time) => {
  const event = {
    type: 'trackTimeSpentOnSite',
    details: {
      time
    }
  };
  saveEvent(event);
};

const trackPageExitIntent = () => {
  const event = {
    type: 'pageExitIntent',
    details: {
      pathName: window.location.pathname
    }
  };
  saveEvent(event);
};

const isInViewport = (element) => {
  var rect = element.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight
  );
}

const onScroll = () => {
  const els = [...document.getElementsByClassName('ad')];
  
  els.forEach((el) => {
    const adType = el.id;
    isInViewport(el) && trackAdSlotView(adType);
  });
}

const trackEvents = () => {
  window.addEventListener('scroll', () => {
    //TODO only every serten time
    onScroll();
  });
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('ad')) {
      const adType = event.target.getAttribute('id');
      trackAdClick(adType);
    }
  });

  window.addEventListener('mousemove', (event) => {
    const mouseY = event.clientY;
    //TODO only every serten time
    mouseY <= 10 && trackPageExitIntent();
  });
}

export {
  trackEvents,
  trackPageLoad,
  trackAdClosed,
  trackTimeSpentOnPage,
  trackTimeSpentOnWebsite
};
  