Rails.application.routes.draw do
  root 'homes#index'
  get '/location', to: 'homes#location' 
  get '/schedule', to: 'homes#schedule'
  get '/activities', to: 'homes#activities'
end
