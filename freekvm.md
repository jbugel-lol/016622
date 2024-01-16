# 🚀 Free Lifetime 200GB VPS, 4x CPU cores, 24GB Memory 🚀

::: warning
Requires a valid credit or debit card to create an Oracle account. BINs or virtual cards will not work.
:::

:::info
Guide by cevoj35548. Based off [this tutorial](https://www.youtube.com/watch?v=NKc3k7xceT8).
:::

---

### Creating the server

1. Go to the **[Oracle Free Tier](https://www.oracle.com/cloud/free/)** page.

2. Scroll down under **_What are Always Free cloud services?_** and check the resources included in the always free offer: Arm-based Ampere A1 cores and 24 GB of memory usable as 1 VM or up to 4 VMs with 3,000 OCPU hours and 18,000 GB hours per month.

3. Press the **Start for Free** button and complete the registration process. You can create a [fake identity](https://fauxid.com/fake-name-generator) and [disposable email](https://smailpro.com/advanced), but the registration will require a credit card to complete.

4. You will be taken to a webpage with a purple banner indicating that you are on the free plan. Unless you specifically upgrade to a paid account, you will _not_ be charged.

5. Under _Launch Resources_, select the **Create a VM instance** option. Give the instance a name.

6. Move down tho the _Image and Shape_ box, and click **Edit**. Click **Change Image** and select the checkbox by **Canonical Ubuntu**. Set the OS version to **20.04**. Then click the blue **Select image** button.

7. Scroll down and click **Change shape**. Change the _Shape series_ to **Ampere**. Scroll down and check the _VM.Standard.AI.Flex_ default size, and increase the _Number of OCPUs_ slider to **4**. A yellow _Service limits status_ warning will appear, but you can proceed by pressing the blue **Select shape** button.

8. Scroll down to _Add SSH keys_, and select **Paste public keys**. Download and install **[PuTTY](https://putty.org/)**, and open an application called **PuTTYgen** (PuTTY Key Generator). Click **Generate** and paste the Public key into the website's _SSH keys_ input field.

9. Scroll down to _Boot volume_ and click **Specify a custom boot volume size**. Set the _Boot volume size (GB)_ input field to **200**. A yellow _Service limits status_ warning will appear again, but you can proceed by pressing the **Create** button at the bottom.

10. You may see a red banner, _Out of capacity for shape VM.Standard.A1.Flex in availability domain_. If this happens, scroll back up to the _Placement_ box and click **Edit**. Click a different _Avaliability domain_ and try to click **Create** again.

11. Your server will now start provisioning. Return to _PuTTY Key Generator_ and click **Save private key**; you will be using it to connect to the server via SSH. Save it to any file location.

::: info
For SSH setup _ONLY_, skip to Step 14.
:::

12. Now that the server has finished provisioning, you need to allow RDP connections on port 3389. Under _Primary VNIC_ click your _Subnet_. Then, under _Security Lists_, click the **Default Security List for vcn-...**. Click **Add Ingress Rules**. This should now open a modal for _Ingress Rule 1_.

13. In the _Source CIDR_ field, type **_0.0.0.0/0_**. In the _Destination Port Range - Optional_ field, type **_3389_**. In the _Description_ field, type **_RDP_**. Then, click **Add Ingress Rules**. You should now return to the Security List page. In your browser, click back twice to return to your instance dashboard.

---

### Setting up the VPS

14. Open PuTTY on your PC.

15. Under the _Host Name (or IP address)_ field, enter the _Private IP address_ of your instance. This can be found under _Primary VNIC_ in your instance dashboard.

16. In the _Category_ tree in PuTTY, navigate under `Connection` > `SSH` and click `Auth`, and click the **Browse** button under _Private key file for authentication_ and select the .ppk file you saved earlier in PuTTYgen. Now scroll back up to _Session_ in the Category tree. Enter a name under _Saved Sessions_ and click **Save**. Now click **Open**. You may recieve a PuTTY Security Alert warning; click **Accept**.

17. Oracle will [reclaim your VM](https://i.imgur.com/W99gp9l.png) if your CPU, RAM, and Network usage is below 10%. To avoid this, please run the script below within a tmux session:

```sh
tmux
bash <(curl -s -L https://gist.githubusercontent.com/Ansen/e45320205faf5786d3282ac880f20bab/raw/onekey-NeverIdle.sh)
# leave tmux by pressing Ctrl+B D
```

::: danger
Stop here if you want to use this server for terminal only. You can now connect to your VPS with PuTTY. [Use tmux](https://www.youtube.com/watch?v=Yl7NFenTgIo) to keep programs running after closing SSH.
:::

::: note
To use it as a portable desktop (_install a DE_), please continue:
:::

18. In the PuTTY window, enter the following commands. Click **<Yes>** (enter) on popups when nessecary.

    ```sh
    sudo apt update && sudo apt upgrade -y
    sudo apt-get install ubuntu-desktop xrdp stacer -y   #  You can alternatively use kubuntu-desktop for KDE
    sudo cp /etc/iptables/rules.v4 /etc/iptables/rules.v4.bak && sudo truncate -s 0 /etc/iptables/rules.v4
    sudo rm /usr/share/polkit-1/actions/org.freedesktop.color.policy
    ```

19. Type: `sudo passwd ubuntu`, and enter a new password for your RDP connection. Now type `sudo reboot`.

---

### Setting up RDP

20. Open **Remote Desktop Connection** in Windows. Click **Show Options**. In the _Computer_ field, enter the _Private IP address_ of your instance. In the _User name_ field, enter **ubuntu**. Check the **Allow me to save credentials** box.

21. Go to the _Local Resources_ tab. Under _Local devices and resources_, ensure only **Clipboard** is checked, and **Printers** is unchecked.

22. Click **Connect**. You may get a _The identity of the remote computer cannot be verified_ warning. Check **Don't ask me again** and click **Yes**. A Windows Security window will pop up. Enter the password you created earlier and click **OK**. You will now be in the Ubuntu desktop.

23. If you are using _GNOME_ (`ubuntu-desktop`), open _Settings_, _`Privacy` > `Screen Lock`_, and change _Blank Screen Delay_ to **Never**, disable _Automatic Screen Lock_, disable _Lock Screen on Suspend_, and disable _Show Notifications on Lock Screen_.

    If you are using _KDE_ (`kubuntu-desktop`), open _System Settings_, search _`Screen Locking`_, and and uncheck the boxes by _Lock screen automatically_.

24. To optimize RDP, open a terminal window and paste the following commands:

- Set animations in Ubuntu (GNOME only):
  - Disable animations:
  ```sh
  gsettings set org.gnome.desktop.interface enable-animations false
  ```
  - ↩️ Undo _(if nessecary)_:
  ```sh
  gsettings set org.gnome.desktop.interface enable-animations true
  ```
- Change the number of colors that XRDP has to transmit:
  - Reduce colors:
  ```sh
  sudo sed -i 's/max_bpp=32/max_bpp=16/g' /etc/xrdp/xrdp.ini && sudo reboot
  ```
  - ↩️ Undo _(if nessecary)_:
  ```sh
  sudo sed -i 's/max_bpp=16/max_bpp=32/g' /etc/xrdp/xrdp.ini && sudo reboot
  ```
- If your RDP is still slow: return to the _Remote Desktop Connection_ Windows client, and go to the _Experience_ tab. Set dropdown under _Choose your connection speed to optimize performance_ to **LAN (10Mbits or higher)**.

25. Open Stacer to prove the CPU Cores (4), Memory (23.4 GiB), and Disk size (193.6 GiB).

---

You can now access your VPS from anywhere in the world using **Remote Desktop Connection**. _You can optionally set up X11 Forwarding by following the tutorial [here](https://www.youtube.com/watch?v=FlHVuA_98SA)._

To monitor the performance of the Ubuntu instance, you can use a graphical performance monitor like **Stacer**, which will show you the number of CPUs, amount of memory, and disk storage available.
