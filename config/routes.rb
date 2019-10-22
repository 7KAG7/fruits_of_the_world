Rails.application.routes.draw do
  root 'homes#index'
  get '/fruits', to: 'homes#index'
  get '/fruits/:id', to: 'homes#index'

  devise_for :users
  
  namespace :api do
    namespace :v1 do
      resources :fruits, only: [:index, :show]
    end
  end
end
