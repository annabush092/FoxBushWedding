Rails.application.routes.draw do
  root 'homes#index'
  get '/location', to: 'homes#location' 
  get '/schedule', to: 'homes#schedule'
  get '/activities', to: 'homes#activities'
  get '/about-location', to: 'homes#aboutLocation'

  resources :guests, only: [:index, :new, :create, :show, :destroy]
end
