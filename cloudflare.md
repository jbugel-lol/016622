## Unlimited Cloudflare-Devices (PC, Mac, Android, iOS)

1. **Download the latest release of WGCF**

   - Visit this [link](https://github.com/ViRb3/wgcf/releases) to download the latest release of WGCF.
   - Once on the GitHub page, you may need to click on "Show all assets" to reveal the available options for download.
   - Save the downloaded file to your default "Downloads" folder.

2. **Rename the downloaded file**

   - Rename the downloaded file to "wgcf".

3. **Open the Command Prompt (CMD)**

   - Launch the Command Prompt (CMD) on your computer.

4. **Change the directory to your Downloads folder**

   - Navigate to your Downloads folder by running the following command:
     ```
     cd %userprofile%/Downloads
     ```

5. **Register WGCF**

   - Run the command:
     ```
     wgcf register
     ```

6. **Generate WGCF configuration**

   - Execute the command:
     ```
     wgcf generate
     ```

7. **Locate the generated files**

   - You should now have two new files: "wgcf-profile.conf" and "wgcf-account.toml".

8. **Access your Cloudflare Warp account settings**

   - Open your Cloudflare Warp app.
   - Go to the Account settings section.

9. **Copy your license key**

   - Copy the license key provided in your Warp account settings.

10. **Update the account key in "wgcf-account.toml"**

    - Open the "wgcf-account.toml" file with Notepad.
    - Replace the "license_key" field with the key you copied in step 9.

11. **Update WGCF**

    - Run the command:
      ```
      wgcf update
      ```

12. **Generate WGCF configuration again**

    - Execute the command:
      ```
      wgcf generate
      ```

13. **Check your account information**

    - Run the command:
      ```
      wgcf status
      ```

14. **Check the status of your WARP**

    - Run the command:
      ```
      wgcf trace
      ```

15. **Import the "wgcf-profile.conf" file to your Wireguard client**

    - Import the "wgcf-profile.conf" configuration file to your Wireguard client.

16. **Activate the configuration**

    - Activate the imported configuration in your Wireguard client.

17. **Copy "wgcf-profile.conf" to other devices**
    - You can now copy the "wgcf-profile.conf" file to any device that supports Wireguard and use WARP+ on those devices.

## Unlimited Proxy-Data

1. **Register on Telegram (if not already registered)**

   - If you haven't already, register for a Telegram account at [Telegram's website](https://telegram.org/).

2. **Message the Warp Plus Proxy Bot**

   - Visit [Warp Plus Proxy Bot](https://t.me/generatewarpplusbot) on Telegram.

3. **Generate a Warp Plus Proxy**

   - Send the command `/generate` to the bot.

3.1 **Register for Imo App**

- Unfortunately, you will need to register for the "Imo" app at this point. You can delete it after registration if you prefer.

4. **Generate Proxy (Again)**

   - Run `/generate` once more through the bot.

5. **Complete Captcha Verification**

   - The bot will prompt you with a captcha, typically a simple math question.

6. **Generate Proxy with Solution**

   - Run `/generate {solution}`, where `{solution}` is your answer to the captcha question.

7. **Access Your Proxy Data**

   - The bot will provide you with both a Cloudflare Warp license key and a WireGuard configuration file.
