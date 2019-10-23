Rails.application.routes.draw do
  root 'homes#index'
  get '/fruits', to: 'homes#index'
  get '/fruits/:id', to: 'homes#index'
<<<<<<< HEAD
  get '/fruits/:id/reviews', to: 'homes#index'
=======
>>>>>>> origin/css_two

  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :fruits, only: [:index, :show] do
        resources :reviews, only: [:index]
      end
      resources :reviews, only: [:create]
    end
  end
end
