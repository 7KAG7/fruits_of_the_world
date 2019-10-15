Rails.application.routes.draw do
  root 'fruits#index'
  devise_for :users

  resources :fruits, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
