CarrierWave.configure do |config|
  if !Rails.env.test?
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["AKIAZSAVKLAGHTY4QTN2"],
      aws_secret_access_key: ENV["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"]
    }
    if Rails.env.production?
      config.fog_directory  = ENV["fotwproduction"]
    else
      config.fog_directory  = ENV["fotwdevelopment"]
    end
  end
end
