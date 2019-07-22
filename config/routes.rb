Rails.application.routes.draw do
  root 'homes#index'
  get '/location', to: 'homes#location' 


end
