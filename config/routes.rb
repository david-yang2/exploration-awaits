Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :carlistings, except: [:new, :edit] do
      resources :reviews, except: [:new, :edit, :show, :update]
      resources :trips, only: [:index]
    end
    # resources :trips, only: [:index, :create]
    resources :reviews, only: [:update, :show]
    resources :bookings, only: [:destroy]
    resources :users, except: [:new, :edit] do 
      resources :bookings, only: [:index, :create]
    end
    resource :session, only: [:new, :create, :destroy]
  end
  
end
