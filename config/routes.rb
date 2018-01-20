Rails.application.routes.draw do
  root  'static_pages#home'

  get '/about', to:'static_pages#about'
  get '/blog/fashion_art', to:'static_pages#blog_fashion_art'
  get '/culture', to:'static_pages#culture'
  get '/facilities', to:'static_pages#facilities'
  get '/gallery', to:'static_pages#gallery'
end
