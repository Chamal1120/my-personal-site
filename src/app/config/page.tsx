export default function ConfigPage() {
  return (
    <>
      <div className="flex flex-col gap-5 p-4 text-left">
        <div>
          <h2 className="text-2xl font-bold text-ctp-crust-light/90">
            {`>>  Linux Box:`}
          </h2>
          <ul>
            <li>{`OS - Arch Linux (Vanilla)`}</li>
            <li>{`Laptop - MacBook Pro 2015 13"`}</li>
            <li>{`RAM - 16GB DDR3 1886MHz`}</li>
            <li>{`Proc - Core i5 5257U @ 2.70GHz [2C/4T]`}</li>
            <li>{`Storage - 128GB M.2 SATA SSD`}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-ctp-crust-light/90">
            {`>>  Software:`}
          </h2>
          <ul>
            <li>{`WM/Compositor - Hyprland`}</li>
            <li>{`Shell - zsh`}</li>
            <li>{`Terminal - Alacritty`}</li>
            <li>{`Multiplexer - Tmux`}</li>
            <li>{`Text Editor/IDE - Neovim`}</li>
            <li>{`Fuzzy Finder - fzf`}</li>
            <li>{`Browser - Chrome/ Helium`}</li>
            <li>{`Recorder - OBS Studio`}</li>
            <li>{`Video Editor - Kdenlive`}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
