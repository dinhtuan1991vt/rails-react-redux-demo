Rails.application.routes.draw do
  root to: 'home#index'
  get "admin(/*all)", to: "home#index"
end
