class User < ApplicationRecord
    # # This makes it so we can validate our password length, without storing it in the DB
    attr_reader :password
  
    validates :username, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    #URI::MailTo::EMAIL_REGEXP
    #=> /\A[a-zA-Z0-9.!\#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\z/

    # This allows us to run methods before running validations
    # In this case, we need to have a session_token when a user is first created
    after_initialize :ensure_session_token
    
  
  
    has_many(:bookings, {
      primary_key: :id, 
      foreign_key: :user_id,
      class_name: :Booking
    })
    
    has_many(:reviews, {
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :Review
  })
  
  
    # Class method for finding a user ONLY if we have the correct username and password
    # only return a user if the username/password is correct
    # Class method for finding a user ONLY if we have the correct username and password
    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      # Set temporary instance variable so that we can validate length
      @password = password
      # Create a password_digest so that we do not have to store the plain-text password in our DB
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      # Use BCrypt's built-in method for checking if the password provided is the user's password
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def ensure_session_token
      # Generate the initial session_token so that we pass the validation
      # This method runs right after the model is initialized, before any validations are run
      self.session_token ||= SecureRandom.urlsafe_base64
    end
  
    def reset_session_token!
      # When a user logs out, we want to scramble their session_token so that bad people cannot use the old one
      self.session_token = SecureRandom.urlsafe_base64
      self.save
      self.session_token
    end
    
    # def new_session_token
    #   SecureRandom.urlsafe_base64
    # end
  
    # def generate_unique_session_token
    #   self.session_token = new_session_token
    #   while User.find_by(session_token: self.session_token)
    #     self.session_token = new_session_token
    #   end
    #   self.session_token
    # end
  
  end
  